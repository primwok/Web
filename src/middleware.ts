import { Region } from "@medusajs/medusa";
import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { MEDUSA_BACKEND_URL } from "./lib/constants";

const BACKEND_URL = MEDUSA_BACKEND_URL;
const DEFAULT_REGION = process.env.NEXT_PUBLIC_DEFAULT_REGION || "ke";

const regionMapCache = {
	regionMap: new Map<string, Region>(),
	regionMapUpdated: Date.now(),
};

async function getRegionMap() {
	const { regionMap, regionMapUpdated } = regionMapCache;

	if (
		!regionMap.size ||
		regionMapUpdated < Date.now() - 3600 * 1000
	) {
		const { regions } = await fetch(`${BACKEND_URL}/store/regions`, {
			next: {
				revalidate: 3600,
				tags: ["regions"],
			},
		}).then((res) => res.json());

		if (!regions) {
			notFound();
		}

		regions.forEach((region: Region) => {
			region.countries.forEach((c) => {
				regionMapCache.regionMap.set(c.iso_2, region);
			});
		});

		regionMapCache.regionMapUpdated = Date.now();
	}

	return regionMapCache.regionMap;
}

async function getCountryCode(
	request: NextRequest,
	regionMap: Map<string, Region>
) {
	try {
		let countryCode;

		const vercelCountryCode = request.headers
			.get("x-vercel-ip-country")
			?.toLowerCase();

		const urlCountryCode = request.nextUrl.pathname.split("/")[1]?.toLowerCase();

		if (urlCountryCode && regionMap.has(urlCountryCode)) {
			countryCode = urlCountryCode;
		} else if (vercelCountryCode && regionMap.has(vercelCountryCode)) {
			countryCode = vercelCountryCode;
		} else if (regionMap.has(DEFAULT_REGION)) {
			countryCode = DEFAULT_REGION;
		} else if (regionMap.size) {
			countryCode = regionMap.keys().next().value;
		}

		return countryCode;
	} catch (error) {
		if (process.env.NODE_ENV === "development") {
			console.error("Middleware.ts: Error getting the country code.");
		}
	}
}

export async function middleware(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const isOnboarding = searchParams.get("onboarding") === "true";
	const cartId = searchParams.get("cart_id");
	const checkoutStep = searchParams.get("step");
	const onboardingCookie = request.cookies.get("_medusa_onboarding");
	const cartIdCookie = request.cookies.get("_medusa_cart_id");

	const regionMap = await getRegionMap();
	const countryCode = regionMap.size ? await getCountryCode(request, regionMap) : null;

	const urlHasCountryCode = countryCode && request.nextUrl.pathname.split("/")[1].includes(countryCode);

	if (
		urlHasCountryCode &&
		(!isOnboarding || onboardingCookie) &&
		(!cartId || cartIdCookie)
	) {
		return NextResponse.next();
	}

	const redirectPath = request.nextUrl.pathname === "/" ? "" : request.nextUrl.pathname;
	const queryString = request.nextUrl.search ? request.nextUrl.search : "";
	let redirectUrl = request.nextUrl.href;

	let response = NextResponse.redirect(redirectUrl, 307);

	if (!urlHasCountryCode && countryCode) {
		redirectUrl = `${request.nextUrl.origin}/${countryCode}${redirectPath}${queryString}`;
		response = NextResponse.redirect(redirectUrl, 307);
	} else if (!regionMap.size) {
		// Handle the case where no regions are available.
		// You could redirect to a default page or simply allow the request to continue.
		return NextResponse.next(); // Allow the request to continue without redirecting
	}

	if (cartId && !checkoutStep) {
		redirectUrl = `${redirectUrl}&step=address`;
		response = NextResponse.redirect(redirectUrl, 307);
		response.cookies.set("_medusa_cart_id", cartId, { maxAge: 60 * 60 * 24 });
	}

	if (isOnboarding) {
		response.cookies.set("_medusa_onboarding", "true", { maxAge: 60 * 60 * 24 });
	}

	return response;
}

export const config = {
	matcher: ["/((?!api|_next/static|favicon.ico).*)"],
};

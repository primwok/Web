"use server"
import { revalidatePath } from "next/cache"

export async function GET(request: Request) {
	const path = new URL(request.url).searchParams.get("path")
	if (!path) {
		return Response.json({ error: "Path not provided" }, { status: 400 });
	}

	try {
		await revalidatePath(path as string)
		return Response.json({ data: { success: true }, status: 200 })
	} catch (error: any) {
		console.log("error", error)
		return Response.json({ error, status: 500 });
	}

}
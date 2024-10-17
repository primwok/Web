"use server"

import { medusaClient } from "@/lib/config"
import { revalidatePath } from "next/cache"
import { redirect } from 'next/navigation'
import * as zod from "zod"


const loginSchema = zod.object(
	{
		email: zod.string().email(),
		password: zod.string().min(6)
	}

)


export const loginCustomer = async (prevState: any, formData: FormData,) => {
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;

	const payload = loginSchema.parse({ email, password });

	console.log("payload", payload);

	try {
		const res = await medusaClient.auth.getToken(
			{ ...payload }
		);
		// revalidatePath("/")
		return { data: { token: res.access_token } }
	} catch (error: any) {
		console.log("error", error)
		return { error: "Error logging in customer" }
	}
}


const registerCustomerSchema = zod.object(
	{
		first_name: zod.string().min(2),
		last_name: zod.string().min(2),
		email: zod.string().email(),
		password: zod.string().min(6),
		password_confirmation: zod.string().min(6),
		phone: zod.string().min(6)
	}
).refine(
	(data) => data.password === data.password_confirmation,
	{
		message: "Passwords do not match",
		params: {
			password_confirmation: "Password confirmation"
		}
	}
)


export const registerCustomer = async (prevState: any, formData: FormData,) => {
	const first_name = formData.get("first_name") as string;
	const last_name = formData.get("last_name") as string;
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;
	const password_confirmation = formData.get("password_confirmation") as string;
	const phone = formData.get("phone") as string;

	const { password_confirmation: passwordConfirmation, ...payload } = registerCustomerSchema.parse({ first_name, last_name, email, password, password_confirmation, phone });

	console.log("payload", payload);
	try {
		await medusaClient.customers.create(
			{ ...payload }
		);
	} catch (error: any) {
		console.log("error", error)
		return { error: "Error registering customer" }
	}

	redirect("/auth/login")
}







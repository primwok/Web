"use server"

import { medusaClient } from "@/lib/client"


export const login = async (email: string, password: string) => {
	try {
		const res = medusaClient.auth.getToken({
			email,
			password,
		});
		return res;
	} catch (error) {
		throw new Error(error as any);
	}
}

export const registerCustomer = async (data: {
	first_name: string;
	last_name: string;
	email: string;
	password: string;
	phone: string;
}) => {
	try {
		const res = medusaClient.customers.create(data);
		return res;
	} catch (error) {
		throw new Error(error as any);
	}
}
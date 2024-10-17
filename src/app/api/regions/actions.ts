"use server"
import { medusaClient } from "@/lib/config"

export const getRegions = async () => {
	try {
		const { response, ...rest } = await medusaClient.regions.list();
		return { data: { ...rest } };
	} catch (error: any) {
		console.log("error", error);
		return { error: "Error getting regions" };
	}
}

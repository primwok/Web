"use server";

import { medusaClient } from "@/lib/config";

export const listShippingOptions = async (cart_id: string) => {
	try {
		const { shipping_options } = await medusaClient.shippingOptions.listCartOptions(cart_id as string,);
		return { data: { shipping_options } };
	} catch (error: any) {
		console.log("error", error);
		return { error: "Error getting shipping options" };
	}
}

export interface AddShippingMethodParams {
	cart_id: string;
	shipping_option_id: string;
}


export const addShippingMethod = async ({ cart_id, shipping_option_id }: AddShippingMethodParams) => {
	try {
		const { cart } = await medusaClient.carts.addShippingMethod(cart_id as string, { option_id: shipping_option_id });
		return { data: { cart } };
	} catch (error: any) {
		console.log("error", error);
		return { error: "Error adding shipping method" };
	}
}
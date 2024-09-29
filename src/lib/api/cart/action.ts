"use server"

import { medusaClient } from "@/lib/config"

export interface CartParams {
	region_id: string
}

export const createCart = async (
	{ region_id }: CartParams
) => {
	try {
		const { cart } = await medusaClient.carts.create({
			region_id,
		});
		return { data: { cart } };
	} catch (error: any) {
		console.log("error", error);
		return { error: "Error creating cart" };
	}
}


export const getCart = async (id: string) => {
	try {
		const { cart } = await medusaClient.carts.retrieve(id);
		return { data: { cart } };
	} catch (error: any) {
		console.log("error", error);
		return { error: "Error getting cart" };
	}
}

export interface AddLineItemParams {
	cartId: string
	quantity: number
	variant_id: string
}

export const addLineItem = async (
	{ cartId, quantity, variant_id }: AddLineItemParams
) => {
	try {
		const { cart } = await medusaClient.carts.lineItems.create(cartId, {
			quantity,
			variant_id,
		});
		return { data: cart };
	} catch (error: any) {
		console.log("error", error);
		return { error: "Error adding item to cart" };
	}
}

export interface UpdateCartParams {
	id: string;
	items?: any[]
	region_id?: string
	country_code?: string
	email?: string
	sales_channel_id?: string
	shipping_address: {
		company?: string
		first_name?: string
		last_name?: string
		address_1?: string
		address_2?: string
		city?: string
		country_code?: string
		province?: string
		postal_code?: string
		phone?: string
	},

}

export const updateCart = async ({ id, ...payload }: UpdateCartParams) => {
	try {
		const cart = await medusaClient.carts.update(id, { ...payload });
		return { data: { ...cart } };
	} catch (error: any) {
		console.log("error", error);
		return { error: "Error updating cart" };
	}
}
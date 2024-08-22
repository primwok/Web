import { medusaClient } from "@/lib/client";

export interface ListProductsParams {
	region_id: string;
	categories?: string[];

}

export const listProducts = async (params: ListProductsParams) => {
	try {
		const { response, ...rest } = await medusaClient.products.list({ ...params });
		return { data: { ...rest } };
	} catch (error: any) {
		console.log("error", error);
		return { error: "Error getting products" };
	}
}

export const listProductById = async (id: string) => {
	try {
		const { response, ...rest } = await medusaClient.products.retrieve(id);
		return { data: { ...rest } };
	} catch (error: any) {
		console.log("error", error);
		return { error: "Error getting product" };
	}
}
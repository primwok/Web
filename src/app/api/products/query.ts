"use client"
import { useQuery } from '@tanstack/react-query';
import { listProductById, listProducts, ListProductsParams } from "./action"

export const useProductsQuery = (params: ListProductsParams) => {
	return useQuery({
		queryKey: ["products", params],
		queryFn: () =>
			listProducts(params)
				.then((res) => res.data)
				.catch((err) => console.log(err)),
	});
}

export const useProductByIdQuery = (id: string) => {
	return useQuery({
		queryKey: ["products", id],
		queryFn: () =>
			listProductById(id)
				.then((res) => res.data)
				.catch((err) => console.log(err)),
	});
}
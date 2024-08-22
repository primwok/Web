"use client"
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCart, CartParams, createCart, addLineItem, AddLineItemParams, UpdateCartParams, updateCart } from "./action";


export const useCartQuery = (id: string) => {
	return useQuery({
		queryKey: ["cart", id],
		queryFn: () => getCart(id).then(res => res.data).catch(err => console.log(err))
	});
}

export const useCreateCartMutation = () => {
	return useMutation({
		mutationKey: ["createCart"],
		mutationFn: (
			params: CartParams
		) =>
			createCart(params)
				.then((res) => res.data)
				.catch((err) => console.log(err)),
	});
}


export const useAddCartLineItemMutation = () => {
	return useMutation({
		mutationKey: ["addLineItem"],
		mutationFn: (
			params: AddLineItemParams
		) =>
			addLineItem(params)
				.then((res) => res.data)
				.catch((err) => console.log(err)),
	});
}


export const useUpdateCartMutation = () => {
	return useMutation({
		mutationKey: ["updateCart"],
		mutationFn: (
			params: UpdateCartParams
		) =>
			updateCart(params)
				.then((res) => res.data)
				.catch((err) => console.log(err)),
	});
}
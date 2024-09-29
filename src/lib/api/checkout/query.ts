import { useMutation, useQuery } from "@tanstack/react-query";
import { addShippingMethod, listShippingOptions } from "./action";

export const useListShippingOptionsQuery = (cart_id: string) =>
	useQuery({
		queryKey: ["shipping_options", cart_id],
		queryFn: () => listShippingOptions(cart_id).then(res => res.data).catch(err => console.log(err))
	});

export const useAddShippingMethodMutation = () =>
	useMutation({
		mutationKey: ["addShippingMethod"],
		mutationFn: (
			params: { cart_id: string; shipping_option_id: string }
		) =>
			addShippingMethod(params)
				.then((res) => res.data)
				.catch((err) => console.log(err)),
	});
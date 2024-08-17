import { CartState, useCart } from "../../common/contexts/cart.context";
import { RegionContext, useRegions } from "../../common/contexts/region.context";
import { UpdateCartParams } from "./action";
import { useAddCartLineItemMutation, useCreateCartMutation, useUpdateCartMutation } from "./query";

interface IAddToCart {
	// region: string;
	quantity: number;
	variant_id: string;
}

export const useCartUtil = () => {
	const { state } = useRegions() as RegionContext
	const createCartMut = useCreateCartMutation();
	const addLineItemMut = useAddCartLineItemMutation();
	const updateCartMut = useUpdateCartMutation();
	const cartCtx = useCart()


	const addToCart = async (payload: IAddToCart) => {
		if (!state.region) return console.error('Region id not found')

		if (!cartCtx?.state?.cart?.id) {
			await createCartMut.mutateAsync(
				{
					region_id: state.region as string,
				},
				{
					onSuccess: (data) => {
						console.log("create cart response", data)
						const cart = data?.cart
						cartCtx.state.cart = cart as any
					},
					onError: (error) => {
						console.error('error', error)
					}
				}
			)
		}

		console.log('cart', cartCtx.state.cart)

		if (cartCtx?.state?.cart?.id) {
			await addLineItemMut.mutateAsync({
				cartId: cartCtx.state.cart.id,
				quantity: payload.quantity,
				variant_id: payload.variant_id
			}, {
				onSuccess: (data) => {
					console.log("added to cart", data)
					const cart = data
					cartCtx?.createCart(cart as CartState["cart"]);
					console.log('cart', cart)
				},
				onError: (error) => {
					console.error('error', error)
				}
			})
		}
		else {
			console.error('Cart id not found')
		}
	}

	const updateCart = async (payload: UpdateCartParams) => {
		const cart_id = cartCtx?.state.cart?.id

		if (!cart_id) return console.error('Cart id not found')

		await updateCartMut.mutateAsync({
			...payload,
			id: cart_id as string,
		}, {
			onSuccess: (data) => {
				console.log("updated cart", data)
				const cart = data?.cart
				cartCtx?.createCart(cart as any);
				console.log('cart', cart)
			},
			onError: (error) => {
				console.error('error', error)
			}
		})
	}

	return { addToCart, updateCart }
}
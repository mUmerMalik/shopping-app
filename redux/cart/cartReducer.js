import * as Cart from './cartConstants';
import CartItem from '../../models/cartItem';
import { ADD_ORDER } from '../order/orderConstants';
import { DELETE_PRODUCT } from '../product/productConstants';

const initialState = {
	cartItems: {},
	totalAmount: 0,
};

export const cartReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case Cart.ADD_TO_CART:
			const prodPrice = payload.price;
			const prodTitle = payload.title;
			let cartItem;
			if (state.cartItems[payload.id]) {
				cartItem = new CartItem(
					state.cartItems[payload.id].quantity + 1,
					prodPrice,
					prodTitle,
					state.cartItems[payload.id].sum + prodPrice
				);
			} else {
				cartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
			}
			return {
				...state,
				cartItems: { ...state.cartItems, [payload.id]: cartItem },
				totalAmount: parseFloat(state.totalAmount) + parseFloat(prodPrice),
			};
		case Cart.REMOVE_FROM_CART:
			const selectedItem = state.cartItems[payload];
			const currentQuantity = selectedItem.quantity;
			let updatedItems;
			if (currentQuantity > 1) {
				const updatedItem = new CartItem(
					selectedItem.quantity - 1,
					selectedItem.productPrice,
					selectedItem.productTitle,
					parseFloat(selectedItem.sum) - parseFloat(selectedItem.productPrice)
				);
				updatedItems = { ...state.cartItems, [payload]: updatedItem };
			} else {
				updatedItems = { ...state.cartItems };
				delete updatedItems[payload];
			}
			return {
				...state,
				cartItems: updatedItems,
				totalAmount:
					parseFloat(state.totalAmount) - parseFloat(selectedItem.productPrice),
			};
		case ADD_ORDER:
			return initialState;
		case DELETE_PRODUCT:
			if (!state.cartItems[payload]) {
				return state;
			} else {
				const updatedCartItems = { ...state.cartItems };
				delete updatedCartItems[payload];
				return {
					...state,
					cartItems: updatedItems,
					totalAmount:
						parseFloat(state.totalAmount) -
						parseFloat(state.cartItems[payload].sum),
				};
			}
		default:
			return state;
	}
};

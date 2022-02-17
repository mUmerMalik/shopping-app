import * as Cart from './cartConstants';

export const addToCart = (data) => {
	return {
		type: Cart.ADD_TO_CART,
		payload: data,
	};
};

export const removeFromCart = (id) => {
	return {
		type: Cart.REMOVE_FROM_CART,
		payload: id,
	};
};

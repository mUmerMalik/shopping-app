import * as Prod from './productConstants';

export const deleteProduct = (data) => {
	return {
		type: Prod.DELETE_PRODUCT,
		payload: data,
	};
};

export const addProduct = (data) => {
	return {
		type: Prod.ADD_PRODUCT,
		payload: data,
	};
};

export const editProduct = (data) => {
	return {
		type: Prod.EDIT_PRODUCT,
		payload: data,
	};
};

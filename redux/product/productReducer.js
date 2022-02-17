import PRODUCTS from '../../demyData/data';
import * as Prod from './productConstants';
import Product from '../../models/product';

const initialState = {
	availableProducts: PRODUCTS,
	userProducts: PRODUCTS.filter((product) => product.ownerId === 'u1'),
};

export const productReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case Prod.DELETE_PRODUCT:
			return {
				...state,
				userProducts: state.userProducts.filter(
					(product) => product.id !== payload
				),
				availableProducts: state.availableProducts.filter(
					(product) => product.id !== payload
				),
			};
		case Prod.ADD_PRODUCT:
			const newProduct = new Product(
				new Date().toString(),
				'u1',
				payload.title,
				payload.imageUrl,
				payload.description,
				payload.price
			);
			return {
				...state,
				userProducts: state.userProducts.concat(newProduct),
				availableProducts: state.availableProducts.concat(newProduct),
			};
		case Prod.EDIT_PRODUCT:
			const prodInd = state.userProducts.findIndex(
				(product) => product.id === payload.id
			);
			const availProdInd = state.availableProducts.findIndex(
				(product) => product.id === payload.id
			);
			const updatedProduct = new Product(
				payload.id,
				state.userProducts[prodInd].ownerId,
				payload.title,
				payload.imageUrl,
				payload.description,
				state.userProducts[prodInd].price
			);
			const updatedProducts = [...state.userProducts];
			updatedProducts[prodInd] = updatedProduct;
			const availUpdatedProducts = [...state.availableProducts];
			availUpdatedProducts[availProdInd] = updatedProduct;
			return {
				...state,
				availableProducts: availUpdatedProducts,
				userProducts: updatedProducts,
			};
		default:
			return state;
	}
};

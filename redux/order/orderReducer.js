import * as OrderAct from './orderConstants';
import Order from '../../models/order';

const initialState = {
	orders: [],
};

const orderReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case OrderAct.ADD_ORDER:
			const newOrder = new Order(
				new Date().toString(),
				payload.items,
				payload.amount,
				new Date()
			);
			return {
				...state,
				orders: state.orders.concat(newOrder),
			};
		default:
			return state;
	}
};

export default orderReducer;

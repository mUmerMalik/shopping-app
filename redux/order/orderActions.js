import * as Order from './orderConstants';

export const addOrder = (data) => {
	return {
		type: Order.ADD_ORDER,
		payload: data,
	};
};

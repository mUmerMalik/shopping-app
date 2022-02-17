import { combineReducers } from 'redux';
import { productReducer } from './product/productReducer';
import { cartReducer } from './cart/cartReducer';
import orderReducer from './order/orderReducer';

const rootReducer = combineReducers({
	product: productReducer,
	cart: cartReducer,
	order: orderReducer,
});

export default rootReducer;

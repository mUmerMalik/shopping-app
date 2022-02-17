import React, { useEffect, useState, Fragment } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import ButtonComponent from '../../components/button/ButtonComponent';
import { useSelector, useDispatch } from 'react-redux';
import { Colors } from '../../constants/constants';
import CartItem from '../../components/shop/CartItem';
import { removeFromCart } from '../../redux/cart/cartActions';
import { addOrder } from '../../redux/order/orderActions';
import EmptyScreen from '../../components/emptyScreen/EmptyScreen';

const CartScreen = () => {
	const [cartItems, setCartItems] = useState([]);
	const { cart } = useSelector((state) => state);
	const dispatch = useDispatch();

	const removeCart = (id) => {
		Alert.alert(
			'Product Removed!',
			'Are you sure you want to remove the product from cart!',
			[
				{ text: 'No', style: 'default' },
				{
					text: 'Yes',
					style: 'destructive',
					onPress: () => dispatch(removeFromCart(id)),
				},
			]
		);
	};

	useEffect(() => {
		let newCartItems = [];
		if (cart.cartItems) {
			for (const key in cart.cartItems) {
				newCartItems.push({
					productId: key,
					productTitle: cart.cartItems[key].productTitle,
					productPrice: cart.cartItems[key].productPrice,
					quantity: cart.cartItems[key].quantity,
					sum: cart.cartItems[key].sum,
				});
			}
		}
		newCartItems.sort((a, b) => (a.productId > b.productId ? 1 : -1));
		setCartItems(newCartItems);
	}, [cart.cartItems]);

	return (
		<View style={styles.screen}>
			{cartItems.length > 0 ? (
				<Fragment>
					<View style={styles.summary}>
						<Text style={styles.summaryText}>
							Text:{' '}
							<Text style={styles.amount}>
								${parseFloat(cart.totalAmount).toFixed(2)}
							</Text>
						</Text>
						<ButtonComponent
							title='Order Now'
							btnColor={styles.btn}
							pressHandler={() => {
								Alert.alert(
									'Order!',
									'Your ordered has been added successfully!',
									[{ text: 'Okay', style: 'default' }]
								);
								dispatch(
									addOrder({
										items: cart.cartItems,
										amount: cart.totalAmount,
									})
								);
							}}
						/>
					</View>
					{cartItems.length > 0 ? (
						<FlatList
							data={cartItems}
							keyExtractor={(item) => item.productId}
							renderItem={(itemData) => (
								<CartItem
									data={itemData.item}
									delateAble
									removeItem={() => removeCart(itemData.item.productId)}
								/>
							)}
						/>
					) : null}
				</Fragment>
			) : (
				<EmptyScreen
					desc1="Don't have any product in your cart."
					desc2='Please add some products!'
				/>
			)}
		</View>
	);
};

export default CartScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 20,
	},
	summary: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 20,
		padding: 10,
		shadowColor: 'black',
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 3 },
		shadowRadius: 8,
		elevation: 5,
		borderRadius: 10,
		backgroundColor: '#fff',
	},
	summaryText: {
		fontFamily: 'Bold',
		fontSize: 18,
	},
	btn: { color: Colors.accent, borderColor: Colors.accent },
	amount: { color: Colors.primary },
});

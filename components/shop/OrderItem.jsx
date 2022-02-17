import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Colors } from '../../constants/constants';
import ButtonComponent from '../button/ButtonComponent';
import CartItem from './CartItem';

const OrderItem = ({ data }) => {
	const [cartItems, setCartItems] = useState([]);
	const [showDetails, setShowDetails] = useState(false);

	useEffect(() => {
		let newCartItems = [];
		if (data.items) {
			for (const key in data.items) {
				newCartItems.push({
					productId: key,
					productTitle: data.items[key].productTitle,
					productPrice: data.items[key].productPrice,
					quantity: data.items[key].quantity,
					sum: data.items[key].sum,
				});
			}
		}
		newCartItems.sort((a, b) => (a.productId > b.productId ? 1 : -1));
		setCartItems(newCartItems);
	}, []);

	return (
		<View style={styles.orderItem}>
			<View style={styles.summary}>
				<Text style={styles.amount}>${parseFloat(data.totalAmount).toFixed(2)}</Text>
				<Text style={styles.date}>{data.readableDate}</Text>
			</View>
			<View style={styles.btnDiv}>
				<ButtonComponent
					title={showDetails ? 'Hide Details' : 'Show Details'}
					btnColor={styles.btn}
					pressHandler={() => setShowDetails(!showDetails)}
				/>
			</View>
			{showDetails && (
				<View>
					{cartItems.length > 0 ? (
						<FlatList
							data={cartItems}
							keyExtractor={(item) => item.productId}
							renderItem={(itemData) => <CartItem data={itemData.item} />}
						/>
					) : null}
				</View>
			)}
		</View>
	);
};

export default OrderItem;

const styles = StyleSheet.create({
	orderItem: {
		flex: 1,
		shadowColor: 'black',
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		elevation: 5,
		borderRadius: 10,
		backgroundColor: 'white',
		margin: 20,
		padding: 15,
	},
	summary: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	amount: {
		fontFamily: 'Bold',
		fontSize: 20,
		color: Colors.primary,
	},
	date: {
		fontFamily: 'Regular',
		fontSize: 14,
		color: Colors.thinGray,
	},
	btnDiv: {
		alignItems: 'center',
		marginTop: 15,
	},
	btn: {
		color: Colors.primary,
		borderColor: Colors.primary,
	},
});

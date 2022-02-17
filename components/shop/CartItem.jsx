import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/constants';

const CartItem = ({ data, removeItem, delateAble }) => {
	return (
		<View style={styles.cartItem}>
			<View style={styles.itemData}>
				<Text style={styles.quantity}>{data.quantity}</Text>
				<Text style={styles.title}>{data.productTitle}</Text>
			</View>
			<View style={styles.itemData}>
				<Text style={styles.title}>${parseFloat(data.sum).toFixed(2)}</Text>
				{delateAble && (
					<TouchableOpacity onPress={removeItem} style={styles.removeBtn}>
						<Ionicons name='md-trash' size={24} color='red' />
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

export default CartItem;

const styles = StyleSheet.create({
	cartItem: {
		padding: 15,
		backgroundColor: 'white',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		shadowColor: 'black',
		shadowOpacity: 0.26,
		shadowOffset: { width: 2, height: 0 },
		shadowRadius: 5,
		elevation: 3,
		borderRadius: 5,
		marginVertical: 5,
	},
	itemData: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	quantity: {
		fontFamily: 'Bold',
		fontSize: 16,
		color: Colors.thinGray,
	},
	title: {
		fontFamily: 'Bold',
		fontSize: 16,
		color: Colors.primary,
		marginHorizontal: 5,
	},
	removeBtn: {
		color: 'red',
		borderColor: 'red',
		borderWidth: 2,
		padding: 5,
		marginLeft: 10,
		borderRadius: 5,
	},
});

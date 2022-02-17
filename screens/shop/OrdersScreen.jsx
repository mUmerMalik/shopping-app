import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import OrderItem from '../../components/shop/OrderItem';
import EmptyScreen from '../../components/emptyScreen/EmptyScreen';

const OrdersScreen = () => {
	const { order } = useSelector((state) => state);
	return (
		<View style={styles.screen}>
			{order.orders.length > 0 ? (
				<FlatList
					data={order.orders}
					keyExtractor={(item) => item.id}
					renderItem={(itemDate) => <OrderItem data={itemDate.item} />}
				/>
			) : (
				<EmptyScreen
					desc1="You don't have any order yet."
					desc2='Please order now!'
				/>
			)}
		</View>
	);
};

export default OrdersScreen;

const styles = StyleSheet.create({
	screen: { flex: 1 },
});

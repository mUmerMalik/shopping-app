import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '../constants/constants';
import OrdersScreen from '../screens/shop/OrdersScreen';

const Stack = createStackNavigator();

function OrderNavigator({ navigation }) {
	const headerStyles = {
		headerStyle: {
			backgroundColor:
				Platform.OS === 'android' ? Colors.primary : 'transparent',
			borderColor: Platform.OS === 'ios' ? Colors.primary : 'transparent',
			borderBottomWidth: Platform.OS === 'ios' ? 2 : 0,
		},
		headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
		headerTitleAlign: 'center',
		headerTitleStyle: { fontFamily: 'Bold', fontSize: 26 },
		headerLeft: () => (
			<TouchableOpacity
				style={{ paddingLeft: 10 }}
				onPress={() => navigation.toggleDrawer()}
			>
				<Ionicons
					name='md-reorder-three-sharp'
					size={32}
					color={Platform.OS === 'ios' ? Colors.primary : 'white'}
				/>
			</TouchableOpacity>
		),
	};
	return (
		<Stack.Navigator mode='card'>
			<Stack.Screen
				name='Order'
				component={OrdersScreen}
				options={{
					title: 'Your Orders',
					...headerStyles,
				}}
			/>
		</Stack.Navigator>
	);
}

export default OrderNavigator;

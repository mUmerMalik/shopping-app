import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsScreen from '../screens/shop/ProductsScreen';
import { Colors } from '../constants/constants';
import { Platform, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';

const Stack = createStackNavigator();

function ShopNavigator({ navigation }) {
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
				name='Products'
				component={ProductsScreen}
				options={({ navigation }) => ({
					title: 'All Products',
					headerRight: () => (
						<View style={{ paddingRight: 10 }}>
							<Ionicons
								name='cart'
								size={24}
								onPress={() => navigation.navigate('Cart')}
								color={Platform.OS === 'android' ? 'white' : Colors.primary}
							/>
						</View>
					),
					...headerStyles,
				})}
			/>
			<Stack.Screen
				name='ProductDetail'
				component={ProductDetailScreen}
				options={({ route }) => ({
					title: route.params.productTitle,
					headerRight: () => (
						<View style={{ paddingRight: 10 }}>
							<Ionicons
								name='cart'
								size={24}
								onPress={() => navigation.navigate('Cart')}
								color={Platform.OS === 'android' ? 'white' : Colors.primary}
							/>
						</View>
					),
					...headerStyles,
				})}
			/>
			<Stack.Screen
				name='Cart'
				component={CartScreen}
				options={{
					title: 'Add To Cart',
					...headerStyles,
				}}
			/>
		</Stack.Navigator>
	);
}

export default ShopNavigator;

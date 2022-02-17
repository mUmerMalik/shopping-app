import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '../constants/constants';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import EditProductScreen from '../screens/user/EditProductScreen';
import AddProductScreen from '../screens/user/AddProductScreen';

const Stack = createStackNavigator();

function AdminNavigator({ navigation }) {
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
		headerRight: () => (
			<TouchableOpacity
				style={{ paddingRight: 10 }}
				onPress={() => navigation.navigate('AddProduct')}
			>
				<Ionicons
					name='create'
					size={24}
					color={Platform.OS === 'ios' ? Colors.primary : 'white'}
				/>
			</TouchableOpacity>
		),
	};
	return (
		<Stack.Navigator mode='card'>
			<Stack.Screen
				name='UserProduct'
				component={UserProductsScreen}
				options={{
					title: 'Your Products',
					...headerStyles,
				}}
			/>
			<Stack.Screen
				name='EditProduct'
				component={EditProductScreen}
				options={({ route }) => ({
					title: route.params.productTitle,
					...headerStyles,
				})}
			/>
			<Stack.Screen
				name='AddProduct'
				component={AddProductScreen}
				options={{
					title: 'Add Product',
					...headerStyles,
				}}
			/>
		</Stack.Navigator>
	);
}

export default AdminNavigator;

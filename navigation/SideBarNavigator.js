import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ShopNavigator from './ShopNavigator';
import OrderNavigator from './OrderNavigator';
import AdminNavigator from './AdminNavigator';

import { Colors } from '../constants/constants';
import {
	Ionicons,
	MaterialCommunityIcons,
	FontAwesome,
} from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

function SideBarNavigator() {
	return (
		<Drawer.Navigator
			drawerContentOptions={{
				activeTintColor: 'white',
				labelStyle: {
					fontFamily: 'Bold',
					fontSize: 16,
					color: 'rgba(255, 255, 255, 0.7)',
				},
			}}
			drawerStyle={{
				backgroundColor: Colors.primary,
			}}
		>
			<Drawer.Screen
				name='Products'
				options={{
					title: 'All Products',
					drawerIcon: () => <Ionicons name='cart' size={24} color='#fff' />,
				}}
				component={ShopNavigator}
			/>
			<Drawer.Screen
				name='Orders'
				options={{
					title: 'Your Orders',
					drawerIcon: () => (
						<MaterialCommunityIcons
							name='order-bool-ascending'
							size={24}
							color='#fff'
						/>
					),
				}}
				component={OrderNavigator}
			/>
			<Drawer.Screen
				name='UserProduct'
				options={{
					title: 'Admin',
					drawerIcon: () => (
						<FontAwesome name='pencil-square-o' size={24} color='white' />
					),
				}}
				component={AdminNavigator}
			/>
		</Drawer.Navigator>
	);
}

export default SideBarNavigator;

import React from 'react';
import { StyleSheet, View, FlatList, Text, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import ButtonComponent from '../../components/button/ButtonComponent';
import { Colors } from '../../constants/constants';
import { deleteProduct } from '../../redux/product/productActions';
import EmptyScreen from '../../components/emptyScreen/EmptyScreen';

const UserProductsScreen = ({ navigation }) => {
	const { product } = useSelector((state) => state);
	const dispatch = useDispatch();

	const editProductPage = (id, title) => {
		navigation.navigate('EditProduct', {
			productId: id,
			productTitle: title,
		});
	};

	const deleteProductHandler = (id) => {
		Alert.alert(
			'Product Deleted!',
			'Are you sure you want to delete the product!',
			[
				{ text: 'No', style: 'default' },
				{
					text: 'Yes',
					style: 'destructive',
					onPress: () => dispatch(deleteProduct(id)),
				},
			]
		);
	};

	return (
		<View style={styles.screen}>
			{product.userProducts.length > 0 ? (
				<FlatList
					data={product.userProducts}
					keyExtractor={(item) => item.id}
					renderItem={(itemData) => (
						<ProductItem
							data={itemData.item}
							onSelect={() =>
								editProductPage(itemData.item.id, itemData.item.title)
							}
						>
							<ButtonComponent
								title='Edit Cart'
								btnColor={styles.btn1}
								pressHandler={() =>
									editProductPage(itemData.item.id, itemData.item.title)
								}
							/>
							<ButtonComponent
								title='Delete Cart'
								btnColor={styles.btn2}
								pressHandler={() => deleteProductHandler(itemData.item.id)}
							/>
						</ProductItem>
					)}
				/>
			) : (
				<EmptyScreen
					desc1="You don't have any products."
					desc2='Please add some products!'
				/>
			)}
		</View>
	);
};

export default UserProductsScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	btn1: {
		color: Colors.primary,
		borderColor: Colors.primary,
	},
	btn2: {
		color: 'red',
		borderColor: 'red',
	},
});

import React from 'react';
import { StyleSheet, FlatList, View, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';
import { addToCart } from '../../redux/cart/cartActions';
import ButtonComponent from '../../components/button/ButtonComponent';
import { Colors } from '../../constants/constants';
import EmptyScreen from '../../components/emptyScreen/EmptyScreen';

const ProductsScreen = ({ navigation }) => {
	const { product } = useSelector((state) => state);
	const dispatch = useDispatch();

	const itemDetailsPage = (id, title) => {
		navigation.navigate('ProductDetail', {
			productId: id,
			productTitle: title,
		});
	};

	return (
		<View style={styles.screen}>
			{product.availableProducts.length > 0 ? (
				<FlatList
					data={product.availableProducts}
					keyExtractor={(item) => item.id}
					renderItem={(itemData) => (
						<ProductItem
							data={itemData.item}
							onSelect={() =>
								itemDetailsPage(itemData.item.id, itemData.item.title)
							}
						>
							<ButtonComponent
								title='View Cart'
								btnColor={styles.btn1}
								pressHandler={() =>
									itemDetailsPage(itemData.item.id, itemData.item.title)
								}
							/>
							<ButtonComponent
								title='To Cart'
								btnColor={styles.btn2}
								pressHandler={() => {
									Alert.alert('Add to cart!', 'Product added successfully!', [
										{ text: 'Okay', style: 'default' },
									]);
									dispatch(addToCart(itemData.item));
								}}
							/>
						</ProductItem>
					)}
				/>
			) : (
				<EmptyScreen
					desc1="Don't have any products yet."
					desc2='Please add some or try later!'
				/>
			)}
		</View>
	);
};

export default ProductsScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	btn1: {
		color: Colors.accent,
		borderColor: Colors.accent,
	},
	btn2: {
		color: Colors.primary,
		borderColor: Colors.primary,
	},
});

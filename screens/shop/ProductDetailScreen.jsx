import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ButtonComponent from '../../components/button/ButtonComponent';
import { Colors } from '../../constants/constants';
import { addToCart } from '../../redux/cart/cartActions';

const ProductDetailScreen = ({ route }) => {
	const { productId } = route.params;
	const product = useSelector((state) =>
		state.product.availableProducts.find((product) => product.id === productId)
	);
	const dispatch = useDispatch();

	return (
		<ScrollView>
			<Image style={styles.image} source={{ uri: product.imageUrl }} />
			<View style={{ alignItems: 'center' }}>
				<ButtonComponent
					style={styles.btnDiv}
					btnColor={styles.btn}
					title='Add To Card'
					pressHandler={() => {
						Alert.alert('Add to cart!', 'Product added successfully!', [
							{ text: 'Okay', style: 'default' },
						]);
						dispatch(addToCart(product));
					}}
				/>
			</View>
			<Text style={styles.price}>${product.price}</Text>
			<Text style={styles.description}>{product.description}</Text>
		</ScrollView>
	);
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 300,
	},
	btnDiv: {
		margin: 10,
	},
	btn: {
		color: Colors.primary,
		borderColor: Colors.primary,
	},
	price: {
		fontFamily: 'Regular',
		fontSize: 18,
		textAlign: 'center',
		color: Colors.thinGray,
		margin: 10,
	},
	description: {
		fontSize: 14,
		marginHorizontal: 20,
		textAlign: 'center',
	},
});

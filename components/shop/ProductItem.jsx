import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	Platform,
	TouchableNativeFeedback,
} from 'react-native';
import { Colors } from '../../constants/constants';

const ProductItem = ({ data, onSelect, children }) => {
	let TouchableCom = TouchableOpacity;
	if (Platform.OS === 'android') {
		TouchableCom = TouchableNativeFeedback;
	}
	return (
		<TouchableCom onPress={onSelect} useForeground>
			<View style={styles.product}>
				<View style={styles.imgDiv}>
					<Image style={styles.image} source={{ uri: data.imageUrl }} />
				</View>
				<View style={styles.description}>
					<Text style={styles.title}>{data.title}</Text>
					<Text style={styles.price}>${parseFloat(data.price).toFixed(2)}</Text>
				</View>
				<View style={styles.btnDiv}>{children}</View>
			</View>
		</TouchableCom>
	);
};

export default ProductItem;

const styles = StyleSheet.create({
	product: {
		flex: 1,
		height: 300,
		margin: 20,
		shadowColor: 'black',
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 3 },
		shadowRadius: 8,
		elevation: 5,
		borderRadius: 10,
		backgroundColor: 'white',
	},
	imgDiv: {
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		overflow: 'hidden',
		height: '60%',
	},
	image: {
		width: '100%',
		height: '100%',
	},
	description: {
		alignItems: 'center',
		height: '20%',
		padding: 10,
	},
	title: {
		fontFamily: 'Bold',
		fontSize: 22,
		marginVertical: 4,
	},
	price: {
		fontSize: 14,
		color: Colors.thinGray,
	},
	btnDiv: {
		flex: 1,
		paddingHorizontal: 15,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '20%',
	},
});

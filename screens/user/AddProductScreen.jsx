import React, { useState } from 'react';
import {
	ScrollView,
	TextInput,
	StyleSheet,
	Text,
	View,
	KeyboardAvoidingView,
} from 'react-native';
import ButtonComponent from '../../components/button/ButtonComponent';
import { Colors } from '../../constants/constants';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/product/productActions';

const AddProductScreen = ({ navigation }) => {
	const [form, setForm] = useState({
		title: '',
		imageUrl: '',
		price: '',
		description: '',
	});
	const dispatch = useDispatch();

	const submitProduct = () => {
		dispatch(addProduct({ ...form, id: new Date().toString() }));
		setForm({
			title: '',
			imageUrl: '',
			price: '',
			description: '',
		});
		navigation.navigate('UserProduct');
	};

	return (
		<KeyboardAvoidingView
			style={{ flex: 1 }}
			behaviour='padding'
			keyboardVerticalOffset={100}
		>
			<ScrollView>
				<View style={styles.screen}>
					<View style={styles.form}>
						<View style={styles.formControl}>
							<Text style={styles.label}>Title:</Text>
							<TextInput
								style={styles.input}
								value={form.title}
								onChangeText={(val) => setForm({ ...form, title: val })}
								keyboardType='default'
								autoCapitalize='sentence'
								autoCorrect
							/>
						</View>
						<View style={styles.formControl}>
							<Text style={styles.label}>Image Url:</Text>
							<TextInput
								style={styles.input}
								value={form.imageUrl}
								onChangeText={(val) => setForm({ ...form, imageUrl: val })}
								keyboardType='default'
							/>
						</View>
						<View style={styles.formControl}>
							<Text style={styles.label}>Price:</Text>
							<TextInput
								style={styles.input}
								value={form.price}
								onChangeText={(val) => setForm({ ...form, price: val })}
								keyboardType='decimal-pad'
							/>
						</View>
						<View style={styles.formControl}>
							<Text style={styles.label}>Description:</Text>
							<TextInput
								style={styles.input}
								value={form.description}
								onChangeText={(val) => setForm({ ...form, description: val })}
								keyboardType='default'
							/>
						</View>
						<View style={styles.btnDiv}>
							<ButtonComponent
								title='Save Product'
								pressHandler={submitProduct}
								btnColor={styles.btn}
							/>
						</View>
					</View>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

export default AddProductScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		paddingVertical: 30,
		paddingHorizontal: 15,
		alignItems: 'center',
	},
	form: {
		width: '100%',
		shadowColor: 'black',
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 3 },
		shadowRadius: 8,
		elevation: 8,
		borderRadius: 10,
		backgroundColor: 'white',
		paddingVertical: 30,
		paddingHorizontal: 20,
	},
	formControl: {
		width: '100%',
		marginBottom: 20,
	},
	label: { fontFamily: 'Bold', fontSize: 16, marginBottom: 5 },
	input: {
		fontFamily: 'Regular',
		fontSize: 16,
		borderColor: '#ccc',
		borderBottomWidth: 2,
	},
	btnDiv: {
		alignItems: 'center',
	},
	btn: {
		color: Colors.primary,
		borderColor: Colors.primary,
	},
});

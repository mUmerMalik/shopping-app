import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const ButtonComponent = ({ title, style, btnColor, pressHandler }) => {
	return (
		<TouchableOpacity
			style={{ ...styles.btn, ...style, ...btnColor }}
			onPress={pressHandler}
			activeOpacity={0.5}
		>
			<Text
				style={{
					...btnColor,
					fontSize: 16,
					fontFamily: 'Regular',
					marginBottom: 0,
				}}
			>
				{title}
			</Text>
		</TouchableOpacity>
	);
};

export default ButtonComponent;

const styles = StyleSheet.create({
	btn: {
		borderWidth: 2,
		paddingVertical: 5,
		paddingHorizontal: 20,
		borderRadius: 10,
		backgroundColor: 'transparent',
	},
});

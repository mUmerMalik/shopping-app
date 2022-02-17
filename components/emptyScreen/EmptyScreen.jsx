import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/constants';

const EmptyScreen = ({ desc1, desc2 }) => {
	return (
		<View style={styles.textDiv}>
			<Text style={styles.text}>{desc1}</Text>
			<Text style={styles.text}>{desc2}</Text>
		</View>
	);
};

export default EmptyScreen;

const styles = StyleSheet.create({
	textDiv: {
		flex: 1,
		padding: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		textAlign: 'center',
		fontFamily: 'Bold',
		color: Colors.thinGray,
		fontSize: 20,
		marginVertical: 2,
	},
});

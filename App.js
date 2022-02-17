import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, Image } from 'react-native';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import store from './redux/index';
import SideBarNavigator from './navigation/SideBarNavigator';

const fetchedFonts = () =>
	Font.loadAsync({
		Regular: require('./assets/fonts/PTSansNarrow-Regular.ttf'),
		Bold: require('./assets/fonts/PTSansNarrow-Bold.ttf'),
	});

export default function App() {
	const [loadingGif, setLoadingGif] = useState(true);
	const [loadFonts, setLoadFonts] = useState(false);

	if (!loadFonts) {
		return (
			<AppLoading
				startAsync={fetchedFonts}
				onFinish={() => setLoadFonts(true)}
				onError={(err) => console.log(err)}
			/>
		);
	}

	if (loadingGif) {
		setTimeout(() => {
			setLoadingGif(false);
		}, 4000);
		return (
			<View style={styles.screenLoading}>
				<Image
					style={styles.Loader}
					resizeMode='contain'
					source={require('./assets/Loader.gif')}
				/>
			</View>
		);
	}

	return (
		<Provider store={store}>
			<NavigationContainer>
				<View style={styles.container}>
					<SideBarNavigator />
				</View>
			</NavigationContainer>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	screen: {
		flex: 1,
	},
	screenLoading: {
		flex: 1,
		backgroundColor: '#0c0c0c',
	},
	Loader: {
		width: '100%',
		height: '100%',
		zIndex: 10,
	},
});

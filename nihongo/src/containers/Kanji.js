import React, { Component } from 'react';

import {
	Text,
	View,
	StyleSheet,
	TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 64
	},
	button: {
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 1,
		backgroundColor: '#9b59b6'
	}
});


export default class Kanji extends Component {
	render() {
		return (
			<View style={ styles.container }>
				<TouchableHighlight style={styles.button}
						onPress={Actions.flash}
						 >
					<Text>
						Cơ bản
					</Text>
				</TouchableHighlight>
				<TouchableHighlight style={styles.button}>
					<Text>
						Nâng cao
					</Text>
				</TouchableHighlight>
				<TouchableHighlight style={styles.button}>
					<Text>
						Ngẫu nhiên
					</Text>
				</TouchableHighlight>

			</View>
		);
	}
}
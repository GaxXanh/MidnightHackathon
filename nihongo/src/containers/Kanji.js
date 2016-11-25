import React, { Component } from 'react';

import {
	Text,
	View,
	StyleSheet,
	TouchableHighlight
} from 'react-native';
import ButtonComponent from 'react-native-button-component';
import { Actions } from 'react-native-router-flux';

const backgroundColor = ['#212122', '#414141'];

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 64
	},
	button: {
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FAC7C8',
		borderColor: '#FF4A29',
		borderRadius: 10,
		borderWidth: 1.6,
		marginTop: 30
	}
});


export default class Kanji extends Component {
	render() {
		return (
			<View style={ styles.container }>
				<TouchableHighlight
						style={styles.button}
						underlayColor='#faebd7'
						onPress={Actions.flash}	>
					<Text>
						Cơ bản
					</Text>
				</TouchableHighlight>
				<TouchableHighlight
						style={styles.button}
						underlayColor='#faebd7'
						onPress={Actions.flash}>
					<Text>
						Nâng cao
					</Text>
				</TouchableHighlight>
				<TouchableHighlight
						style={styles.button}
						underlayColor='#faebd7'
						onPress={Actions.flash}>
					<Text>
						Ngẫu nhiên
					</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

import React, { Component } from 'react';

import {
	Text,
	View,
	StyleSheet,
	TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 64,
		padding: 10
	},
	button: {
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 1,
		backgroundColor: '#9b59b6'
	},
	titleBar: {
		flexDirection: 'row',

	},
	backButton: {
		flex: 1,
	},
	questionCount: {
		flex: 1,
		textAlign: 'center'
	},
	nextButton: {
		flex: 1,

		alignItems: 'flex-end'
	},
	kanjiBox: {
		flex: 1,

	},

	bottomBar: {

	}
});


export default class FlashCard extends Component {
	render() {
		return (
			<View style={ styles.container }>
				<View style={styles.titleBar}>

					<Text style={styles.questionCount}>2/50</Text>

				</View>

				<View style={styles.kanjiBox}>

				</View>

				<View style={styles.kanjiBox}>
					<TouchableHighlight style={styles.backButton}>
						<Text>
							Back
						</Text>
					</TouchableHighlight>

					<TouchableHighlight style={styles.nextButton}>
						<Text>
							Next
						</Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
}
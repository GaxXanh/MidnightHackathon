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
	headerBar: {
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	questionText: {
		fontSize: 20
	},
	kanjiBox: {
		marginTop: 50,
		height: 300,
		backgroundColor: 'yellow',
		justifyContent: 'center',
		alignItems: 'center'
	},

	kanjiText: {
		textAlign: 'center',
		fontSize: 200
	},

	bottomBar: {

		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'flex-end'

	},
	backButton: {
		flex: 1,
		paddingLeft: 20,
		height: 100,
		justifyContent: 'center',
		backgroundColor: 'blue',
		alignItems: 'center'
	},
	nextButton: {
		flex: 1,
		paddingRight: 20,
		height: 100,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'pink'
	}
});


export default class FlashCard extends Component {
	render() {
		return (
			<View style={ styles.container }>
				<View style={styles.headerBar}>
					<Text style={styles.questionText}>2/50</Text>
				</View>

				<View style={styles.kanjiBox}>
					<Text style={styles.kanjiText} >
						本
					</Text>
				</View>

				<View style={styles.bottomBar}>
					<TouchableHighlight style={styles.backButton}>
						<Text>Back</Text>
					</TouchableHighlight>
					<TouchableHighlight style={styles.nextButton}>
						<Text>Next</Text>
					</TouchableHighlight>

				</View>
			</View>


		);
	}
}
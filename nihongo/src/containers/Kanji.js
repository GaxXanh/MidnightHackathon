import React, { Component } from 'react';

import {
	Text,
	View,
	StyleSheet,
	TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const backgroundColor = ['#212122', '#414141'];

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10
	},
	row: {
		marginTop: 90,
		flex: 1,
		flexDirection: 'row'
	},
	button: {
		height: 50,
		marginLeft: 10,
		padding: 10,
		backgroundColor: '#FAC7C8',
		borderColor: '#FF6960',
		justifyContent: 'center',
		borderWidth: 1.0,
		borderRadius: 10,
		flex: 1
	},
	title: {
		width: 50,
		height: 50,
		borderRadius: 25,

		backgroundColor: 'red',
		alignItems: 'center',
		justifyContent: 'center'
	}
});


export default class Kanji extends Component {
	render() {
		return (
			<View style={ styles.container }>
				<View style={styles.row}>
					<View style={styles.title}><Text style={{fontSize: 30, color: 'white'}}>小</Text></View>
					<TouchableHighlight
						underlayColor='#FAB3C8'
						style={styles.button}
						onPress={ Actions.flash }>
						<Text>
							Kanji 300
						</Text>
						</TouchableHighlight>
				</View>
				<View style={styles.row}>
					<View style={styles.title}><Text style={{fontSize: 30, color: 'white'}}>中</Text></View>
					<TouchableHighlight
						underlayColor='#FAB3C8'
						style={styles.button}
						onPress={ Actions.flash }>
						<Text>
							Kanji 700
						</Text>
						</TouchableHighlight>
				</View>
				<View style={styles.row}>
					<View style={styles.title}><Text style={{fontSize: 30, color: 'white'}}>大</Text></View>
					<TouchableHighlight
						underlayColor='#FAB3C8'
						style={styles.button}
						onPress={ Actions.flash }>
						<Text>
							Kanji 1000
						</Text>
						</TouchableHighlight>
				</View>
				<View style={styles.row}>
					<View style={styles.title}><Text style={{fontSize: 30, color: 'white'}}>選</Text></View>
					<TouchableHighlight
						underlayColor='#FAB3C8'
						style={styles.button}
						onPress={ Actions.flash }>
						<Text>
							Kanji chọn lọc
						</Text>
						</TouchableHighlight>
				</View>
				<View style={{flex:3}}></View>
			</View>
		);
	}
}

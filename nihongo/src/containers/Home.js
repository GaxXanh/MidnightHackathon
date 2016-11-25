import React, { Component } from 'react';
import {
	Text,
	TouchableHighlight,
	StyleSheet,
	View
} from 'react-native';

import { Actions } from 'react-native-router-flux';

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
		backgroundColor: 'pink',
		justifyContent: 'center',

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

export default class Home extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.row}>
					<View style={styles.title}><Text style={{fontSize: 30, color: 'white'}}>字</Text></View>
					<TouchableHighlight
							underlayColor="pink"
							style={styles.button}
							onPress={ Actions.kanji }>
						<Text>
							Học Kanji
						</Text>
					</TouchableHighlight>
				</View>

				<View style={styles.row}>
					<View style={styles.title}><Text style={{fontSize: 30, color: 'white'}}>受</Text></View>
					<TouchableHighlight
							underlayColor="pink"
							style={styles.button}
							onPress={ Actions.kanji }>
						<Text>
							Làm bài test
						</Text>
					</TouchableHighlight>
				</View>

				<View style={styles.row}>
					<View style={styles.title}><Text style={{fontSize: 30, color: 'white'}}>上</Text></View>
					<TouchableHighlight
							underlayColor="pink"
							style={styles.button}
							onPress={ Actions.kanji }>
						<Text>
							Bảng xếp hạng
						</Text>
					</TouchableHighlight>
				</View>

				<View style={styles.row}>
					<View style={styles.title}><Text style={{fontSize: 30, color: 'white'}}>設</Text></View>
					<TouchableHighlight
							underlayColor="pink"
							style={styles.button}
							onPress={ Actions.kanji }>
						<Text>
							Cài đặt
						</Text>
					</TouchableHighlight>
				</View>

				<View style={{flex:3}}></View>
			</View>
		);
	}
}
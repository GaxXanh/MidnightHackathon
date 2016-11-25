import React, { Component } from 'react';
import {
	Text,
	TouchableHighlight,
	StyleSheet
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({

});

export default class Home extends Component {
	render() {
		return (
			<TouchableHighlight
					onPress={ Actions.kanji }>
				<Text style={{ marginTop: 80 }}>
					Học Kanji
				</Text>
			</TouchableHighlight>
		);
	}
}
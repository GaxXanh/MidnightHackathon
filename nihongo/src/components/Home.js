import React, { Component } from 'react';
import {
	Text,
	TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux';

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
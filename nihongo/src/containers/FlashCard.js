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

	constructor(props) {
	  super(props);

		this.state = {
			kanji: {},
			flip: false
		}

		this.current = -1;

	}

	next() {
		// Has reached maximum question
		if (this.current >= this.props.dataSource.length - 1) {
			return;
		}

		this.setState({
			kanji: this.props.dataSource[++this.current]
		});
		// this.current += this.current < this.props.dataSource.length - 1 ? 1 : 0;
	}

	back() {
		// Has reached minimum question
		if (this.current <= 0) {
			return;
		}

		this.setState({
			kanji: this.props.dataSource[--this.current]
		});
	}

	flipCard() {
		this.setState({
			flip: !this.state.flip
		});
	}

	renderCard() {
		// card is in close state
		if (this.state.flip) {
			return (
				<Text style={styles.kanjiText} >
							{this.state.kanji.kanji}
				</Text>
			);
		}
		// card is opened
		else {
			return (
				<Text style={styles.kanjiText} >
					O
				</Text>
			);
		}
	}

	componentDidMount() {
		this.next();
	}

	render() {

		return (
			<View style={ styles.container }>
				<View style={styles.headerBar}>
					<Text style={styles.questionText}>
						{this.current + 1} / {this.props.dataSource.length}
					</Text>
				</View>

				<TouchableHighlight underlayColor='#4d4d4f' style={styles.kanjiBox}
					onPress={this.flipCard.bind(this)} >
					{this.renderCard()}
				</TouchableHighlight>

				<View style={styles.bottomBar}>
					<TouchableHighlight style={styles.backButton}
						onPress={this.back.bind(this)}	>
						<Text>Back</Text>
					</TouchableHighlight>
					<TouchableHighlight style={styles.nextButton}
						onPress={this.next.bind(this)}	>
						<Text>Next</Text>
					</TouchableHighlight>

				</View>
			</View>


		);
	}
}
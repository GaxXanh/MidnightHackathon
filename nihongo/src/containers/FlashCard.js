import React, { Component } from 'react';

import {
	Text,
	View,
	StyleSheet,
	TouchableHighlight,
	AlertIOS
} from 'react-native';

import { Actions } from 'react-native-router-flux';

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
	},
	// card opened
	cardTitle: {
		fontSize: 45,
		textAlign: 'center'
	},
	cardFurigana: {
		fontSize: 20
	},
	cardExample: {
		fontSize: 20,
		padding: 5
	}
});


export default class FlashCard extends Component {

	constructor(props) {
	  super(props);

		this.state = {
			kanji: {},
			flip: false,
			examples: {}
		}

		this.current = -1;

	}

	next() {
		// Has reached maximum question
		if (this.current >= this.props.dataSource.length - 1) {
			// show alert
			AlertIOS.alert(
			 'Kết thúc bài học',
			 null,
			 [
			   {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
			   {text: 'Kết thúc', onPress: () => {
			   	Actions.kanji
			   }},
			 ],
			);
			return;
		}

		this.setState({
			kanji: this.props.dataSource[++this.current],
			flip: false
		});

	}

	back() {
		// Has reached minimum question
		if (this.current <= 0) {
			return;
		}

		this.setState({
			kanji: this.props.dataSource[--this.current],
			flip: false
		});
	}

	flipCard() {
		this.setState({
			flip: !this.state.flip
		});
	}

	renderCard() {
		// card is in close state
		if (!this.state.flip) {
			return (
				<Text style={styles.kanjiText} >
					{this.state.kanji.kanji}
				</Text>
			);
		}
		// card is opened
		else {

			return (
				<View>
					<Text style={styles.cardTitle} >
						{this.state.kanji.kanji}
					</Text>
					<Text style={styles.cardFurigana} >
						{this.state.kanji.hiragana} ({this.state.kanji.romaji})
					</Text>

					{
						this.state.kanji.Example.map((example) => {
							return (
								<Text style={styles.cardExample} >
									- {example.text}
								</Text>
							)
						})

					}

				</View>
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
						Câu số {this.current + 1} / {this.props.dataSource.length}
					</Text>
				</View>

				<TouchableHighlight underlayColor='#4d4d4f' style={styles.kanjiBox}
					onPress={this.flipCard.bind(this)} >
					{this.renderCard()}
				</TouchableHighlight>

				<View style={styles.bottomBar}>
					<TouchableHighlight style={styles.backButton}
						onPress={this.back.bind(this)}	>
						<Text>Trở lại</Text>
					</TouchableHighlight>
					<TouchableHighlight style={styles.nextButton}
						onPress={this.next.bind(this)}	>
						<Text>Tiếp</Text>
					</TouchableHighlight>

				</View>
			</View>


		);
	}
}
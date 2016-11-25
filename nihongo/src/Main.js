import React, { Component } from 'react';

import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';

/* import router */
import { Scene, Router, Actions } from 'react-native-router-flux';

/* App's Components */
import Home from './containers/Home';
import Kanji from './containers/Kanji';
import FlashCard from './containers/FlashCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
	navBar: {
		backgroundColor:'#ED1E29'
	},
	navBarTitle:{
    color:'#FFFFFF',
		fontWeight: '700'
	},
	barButtonIconStyle:{
    tintColor:'rgb(255,255,255)'
	}
});

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="home" component={Home} title="React de Nihongo" initial={true} />
    <Scene key="kanji" component={Kanji} title="Reactで「日本語」" backgroundColor="red"/>
    <Scene key="flash" component={FlashCard} title="Flash Card" />
  </Scene>
); backgroundColor="red"

export default class Main extends Component {
  render() {
    return (
      <Router scenes={scenes} navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle} barButtonIconStyle={styles.barButtonIconStyle}/>
    );
  }
}

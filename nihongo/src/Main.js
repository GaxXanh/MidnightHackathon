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
import Home from './components/Home';

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
});

const scenes = Actions.create(
  <Scene key="root">
          <Scene key="home" component={Home} title="React de Nihongo" />
  </Scene>
);

export default class Main extends Component {

  render() {
    return (
      <Router scenes={scenes} />
    );
  }
}

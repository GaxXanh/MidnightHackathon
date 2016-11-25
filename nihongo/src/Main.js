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


const KANJI_LIST = [
    {
             "kanji":"挙",
             "description":"a wedding ceremony, a wedding",
             "romaji":"kyoshiki",
             "hiragana": "きょしき",
             "Example" : [{
                "text": "挙式はいつですか",
                "translate": "When is your wedding ceremony?"
             },{
                "text": "教会で挙式の予定です",
                "translate": "Our wedding will be held in church."
             }]

     },
     {
             "kanji":"式",
             "description":"a wedding ceremony, a wedding",
             "romaji":"kyoshiki",
             "hiragana": "きょしき",
             "Example" : [{
                "text": "挙式はいつですか",
                "translate": "When is your wedding ceremony?"
             },{
                "text": "教会で挙式の予定です",
                "translate": "Our wedding will be held in church."
             }]

     }

]

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="home" component={Home} title="React de Nihongo" initial={true} />
    <Scene key="kanji" component={Kanji} />
    <Scene key="flash" component={FlashCard} title="Flash Card" dataSource={KANJI_LIST} />


  </Scene>
);

export default class Main extends Component {

  render() {
    return (
      <Router scenes={scenes} />
    );
  }
}

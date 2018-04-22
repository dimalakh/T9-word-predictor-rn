import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import KeyboardComponent from './components/keyboard'
import InputArea from './components/inputArea'
import PredictionBar from './components/predictionBar'


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <InputArea />
        <PredictionBar />
        <KeyboardComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

import React, { Component } from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import KeyboardComponent from './components/keyboard'
import InputArea from './components/inputArea'
import PredictionBar from './components/predictionBar'
import reducer from './store/reducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore)
const store = createStoreWithMiddleware(reducer)
export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <InputArea />
          <PredictionBar />
          <KeyboardComponent />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})

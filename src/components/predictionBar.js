import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux'

import { selectPredictedWord } from '../store/actions'

const predictionBar = ({ predictedWords, selectPredictedWord }) => {
  const renderPredictedWords = () => predictedWords.map(word =>
    <TouchableWithoutFeedback onPress={() => selectPredictedWord(word)}>
      <Text>{ word }</Text>
    </TouchableWithoutFeedback>
  )

  if (!predictedWords.length) {
    return null
  }

  return <View style={styles.predictionBarWrapper}>
    {renderPredictedWords()}
  </View>
}

const mapStateToProps = state => ({
  predictedWords: state.predictedWords
})

const mapDispatchToProps = dispatch => ({
  selectPredictedWord: word => dispatch(selectPredictedWord(word))
})

export default connect(mapStateToProps, mapDispatchToProps)(predictionBar)

const styles = StyleSheet.create({
  predictionBarWrapper: {
    width: '100%',
    padding: 10,
    backgroundColor: '#d1f1ff'
  }
})
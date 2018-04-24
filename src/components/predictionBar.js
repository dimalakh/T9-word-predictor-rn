import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux'

import { selectPredictedWord } from '../store/actions'
import variables from '../constants/variables'

const predictionBar = ({ predictedWords, selectPredictedWord }) => {
  const renderPredictedWords = () => predictedWords.map((word, index) =>
    <TouchableWithoutFeedback key={index} onPress={() => selectPredictedWord(word)}>
      <View style={styles.predictedWord}>
        <Text style={styles.predictedWordText}>{ word }</Text>
      </View>
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
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 5,
    paddingHorizontal: 10,
    backgroundColor: variables.lightBlue
  },
  predictedWord: {
    marginRight: 10,
    marginBottom: 5
  },
  predictedWordText: {
    fontSize: 16
  }
})
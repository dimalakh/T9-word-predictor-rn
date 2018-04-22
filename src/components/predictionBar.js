import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

const predictionBar = ({ predictedWords }) => {
  const renderPredictedWords = () => predictedWords.map(word =>
    <Text>{ word }</Text>
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

export default connect(mapStateToProps)(predictionBar)

const styles = StyleSheet.create({
  predictionBarWrapper: {
    width: '100%',
    padding: 10,
    backgroundColor: '#d1f1ff'
  }
})
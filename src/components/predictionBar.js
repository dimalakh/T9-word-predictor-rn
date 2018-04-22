import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const predictionBar = () => {
  return <View style={styles.predictionBarWrapper}>
    <Text>Some text</Text>
  </View>
}

export default predictionBar

const styles = StyleSheet.create({
  predictionBarWrapper: {
    width: '100%',
    padding: 10,
    backgroundColor: '#d1f1ff'
  }
})
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const inputArea = () =>
  <View style={styles.inputAreaWrapper}>
    <Text>Some text</Text>
  </View>

export default inputArea

const styles = StyleSheet.create({
  inputAreaWrapper: {
    flex: 1,
    paddingVertical: 45,
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: '#fff'
  }
})
import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

const inputArea = ({ text }) =>
  <ScrollView style={styles.inputAreaWrapper}>
    <Text style={styles.inputAreaText}>{ text }</Text>
  </ScrollView>

const mapStateToProps = state => ({
  text: state.typedText + state.currentWord + state.currentLetter
})

export default connect(mapStateToProps)(inputArea)

const styles = StyleSheet.create({
  inputAreaWrapper: {
    flex: 1,
    paddingVertical: 45,
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: '#fff'
  },
  inputAreaText: {
    fontSize: 40
  }
})
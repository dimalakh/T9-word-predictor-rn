import React from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const InputArea = ({ text }) =>
  <ScrollView style={styles.inputAreaWrapper}>
    <Text style={styles.inputAreaText}>{ text }</Text>
  </ScrollView>

InputArea.propTypes = {
  text: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  text: state.typedText + state.currentWord + state.currentLetter
})

export default connect(mapStateToProps)(InputArea)

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

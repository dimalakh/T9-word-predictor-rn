import React from 'react'
import { 
  StyleSheet,
  Text,
  View
} from 'react-native'

import Key from './key'

const KeyboardComponent = () => (
  <View style={styles.keyboardWrapper}>
    <Key symbols='1' />
    <Key symbols='2ABC' />
    <Key symbols='3DEF' />

    <Key symbols='4GHI' />
    <Key symbols='5JKL' />
    <Key symbols='6MNO' />

    <Key symbols='7PQRS' />
    <Key symbols='8TUV' />
    <Key symbols='9WXYZ' />

    <Key symbols='*' />
    <Key symbols='0' />
    <Key symbols='#' />
  </View>
)

export default KeyboardComponent

const styles = StyleSheet.create({
  keyboardWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

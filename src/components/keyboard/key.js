import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import variables from '../../constants/variables'
import {
  setCurrentLetter,
  addLetterToCurrentWord,
  addPhraseLetters,
  addWordToText,
  getPredictedWords,
  removeLastCharacter
} from '../../store/actions'

class KeyComponent extends Component {
  constructor (props) {
    super(props)
    this.counter = 0
    this.title = this.props.symbols.substring(0, 1)
    this.subtitle = this.props.symbols.substring(1)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.reset = this.reset.bind(this)
    this.state = {
      isPressed: false
    }
  }

  reset () {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
    this.counter = 0
    this.intervalId = null
  }

  handleKeyPress () {
    const { symbols, setLetter, onSpacePress, onRemovePress } = this.props

    this.setState({ isPressed: true })
    setLetter(symbols[this.counter])

    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.counter += 1
        if (this.title === '0') {
          onSpacePress()
        } else if (this.title === '#') {
          onRemovePress()
        } else {
          if (this.counter === symbols.length) {
            this.counter = 0
          }
          this.props.setLetter(symbols[this.counter])
        }
      }, 500)
    }
  }

  handleKeyUp () {
    this.setState({ isPressed: false })

    if (this.title === '0' && this.counter === 1) {
      return this.reset()
    }

    this.props.saveLetter(this.subtitle)
    this.reset()
  }

  render () {
    const renderSubTitle = () =>
      this.subtitle && <Text style={styles.keySubtitle}>{ this.subtitle }</Text>

    return <TouchableOpacity
      activeOpacity={1}
      style={[ styles.keyWrapper, this.intervalId && styles.activeKeyWrapper ]}
      onPressIn={this.handleKeyPress}
      onPressOut={this.handleKeyUp}
    >
      <Text style={styles.keyTitle}>{ this.title }</Text>
      { renderSubTitle() }
    </TouchableOpacity>
  }
}

const mapDispatchToProps = dispatch => ({
  onSpacePress: () => dispatch(addWordToText()),
  onRemovePress: () => dispatch(removeLastCharacter()),
  setLetter: letter => dispatch(setCurrentLetter(letter)),
  saveLetter: phraseLetters => {
    dispatch(addPhraseLetters(phraseLetters))
    dispatch(addLetterToCurrentWord())
    dispatch(getPredictedWords())
  }
})

KeyComponent.propTypes = {
  saveLetter: PropTypes.func.isRequired,
  setLetter: PropTypes.func.isRequired,
  onRemovePress: PropTypes.func,
  onSpacePress: PropTypes.func,
  symbols: PropTypes.string.isRequired
}

export default connect(
  null,
  mapDispatchToProps
)(KeyComponent)

const styles = StyleSheet.create({
  keyWrapper: {
    width: '33.333%',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderColor: variables.grey,
    backgroundColor: variables.white,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  activeKeyWrapper: {
    borderColor: variables.lightGrey,
    backgroundColor: variables.hover
  },
  keyTitle: {
    fontSize: 26
  },
  keySubtitle: {
    fontSize: 13
  }
})

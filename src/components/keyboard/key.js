import React, { Component } from 'react'
import { 
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'

class KeyComponent extends Component {
  constructor(props) {
    super(props)
    this.counter = 0
    this.title = this.props.symbols.substring(0, 1)
    this.subtitle = this.props.symbols.substring(1)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.reset = this.reset.bind(this)
  }

  reset () {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
    this.counter = 0
    this.intervalId = null
  }

  handleKeyPress () {
    const { symbols } = this.props

    console.log(symbols[this.counter])

    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.counter += 1
        if (this.title === '0') {
        } else {
          if (this.counter === symbols.length) {
            this.counter = 0
          }
          console.log(symbols[this.counter])
        }
      }, 500)
    }
  }

  handleKeyUp () {
    if (this.title === '0' && this.counter === 1) {
      return
    }
    this.reset()
  }

  render() {
    return <TouchableOpacity 
    style={styles.keyWrapper}
    onPressIn={this.handleKeyPress}
    onPressOut={this.handleKeyUp}>
        <Text>{ this.title }</Text>
        <Text>{ this.subtitle }</Text>
    </TouchableOpacity>
  }
}

export default KeyComponent

const styles = StyleSheet.create({
  keyWrapper: {
    width: '33.3%',
    padding: 10,
    borderColor: '#000',
    borderWidth: 1
  }
})

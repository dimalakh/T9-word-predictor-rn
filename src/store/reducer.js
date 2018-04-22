import * as actionTypes from '../constants/actionTypes'

const initialState = {
  typedText: '',
  currentWord: '',
  currentLetter: '',
  phraseLetters: [],
  predictedWords: []
}

const keyboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_LETTER:
      return { ...state, currentLetter: action.payload}
    case actionTypes.ADD_LETTER_TO_CURRENT_WORD:
      return { 
        ...state,
        currentWord: state.currentWord + state.currentLetter,
        currentLetter: ''
      }
    case actionTypes.ADD_WORD_TO_TEXT:
      return {
        ...state,
        typedText: state.typedText + state.currentWord + ' ',
        currentWord: '',
        currentLetter: ''
      }
    case actionTypes.ADD_PHRASE_LETTERS:
      return {
        ...state,
        phraseLetters: [ 
          ...new Set([ ...state.phraseLetters, action.payload ]) ]
      }
    default:
      return state
  }
}
  
export default keyboardReducer
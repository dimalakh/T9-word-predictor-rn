import * as actionTypes from '../constants/actionTypes'

const initialState = {
  typedText: '',
  currentWord: '',
  currentLetter: '',
  phraseLetters: [],
  predictedWords: [],
  fetchError: null
}

const keyboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_LETTER:
      return { ...state, currentLetter: action.payload }
    case actionTypes.REMOVE_LAST_CHARACTER:
      const userInput = state.typedText + state.currentWord + state.currentLetter
      const deleteStep = state.currentLetter ? 2 : 1

      return {
        ...state,
        typedText: userInput.substring(0, userInput.length - deleteStep),
        currentWord: '',
        currentLetter: '',
        predictedWords: []
      }
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
        currentLetter: '',
        predictedWords: []
      }
    case actionTypes.ADD_PHRASE_LETTERS:
      return {
        ...state,
        phraseLetters: [
          ...new Set([ ...state.phraseLetters, action.payload ])
        ]
      }
    case actionTypes.SET_PREDICTED_WORDS:
      return {
        ...state,
        predictedWords: action.payload,
        fetchError: null
      }
    case actionTypes.SELECT_PREDICTED_WORD:
      return {
        ...state,
        predictedWords: [],
        typedText: state.typedText + action.payload + ' ',
        currentLetter: '',
        currentWord: '',
        phraseLetters: []
      }
    case actionTypes.SET_FETCH_ERROR:
      return {
        ...state,
        fetchError: action.payload
      }
    default:
      return state
  }
}

export default keyboardReducer

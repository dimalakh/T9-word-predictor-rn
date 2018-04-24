import * as actionTypes from '../constants/actionTypes'
import { predictWords } from '../services'

export const setCurrentLetter = currentLetter => ({
  type: actionTypes.SET_CURRENT_LETTER,
  payload: currentLetter
})

export const addLetterToCurrentWord = () => ({
  type: actionTypes.ADD_LETTER_TO_CURRENT_WORD,
})

export const addPhraseLetters = phraseLetters => ({
  type: actionTypes.ADD_PHRASE_LETTERS,
  payload: phraseLetters
})

export const addWordToText = () => ({
  type: actionTypes.ADD_WORD_TO_TEXT
})

export const setPredictedWords = predictedWords => ({
  type: actionTypes.SET_PREDICTED_WORDS,
  payload: predictedWords
})

export const selectPredictedWord = word => ({
  type: actionTypes.SELECT_PREDICTED_WORD,
  payload: word
})

export const removeLastCharacter = () => ({
  type: actionTypes.REMOVE_LAST_CHARACTER
})

export  const setFetchError = err => ({
  type: actionTypes.SET_FETCH_ERROR,
  payload: err
})

export const getPredictedWords = () => (dispatch, getState) => {
  const phraseLetters = getState().phraseLetters.join('')
  const phraseLength = getState().currentWord.length

  predictWords(phraseLetters, phraseLength)
    .then(({ data }) => {
      dispatch(setPredictedWords(data))
    })
    .catch(err => {
      dispatch(setFetchError(err))
    })
}
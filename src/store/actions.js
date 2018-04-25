import * as actionTypes from '../constants/actionTypes'
import { predictWords } from '../services'

export const setCurrentLetter = currentLetter => ({
  type: actionTypes.SET_CURRENT_LETTER,
  payload: currentLetter
})

export const addLetterToCurrentWord = () => ({
  type: actionTypes.ADD_LETTER_TO_CURRENT_WORD
})

export const addPhraseCode = code => ({
  type: actionTypes.ADD_PHRASE_CODE,
  payload: code
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

export const setFetchError = err => ({
  type: actionTypes.SET_FETCH_ERROR,
  payload: err
})

export const getPredictedWords = () => (dispatch, getState) => {
  const phraseCode = getState().phraseCode.replace(/\D/g, '')

  predictWords(phraseCode)
    .then(({ data }) => {
      dispatch(setPredictedWords(data))
    })
    .catch(err => {
      dispatch(setFetchError(err.message))
    })
}

import { call, put, takeLatest, all, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { types } from '../actions';

const ROOT_URL = 'https://api.datamuse.com/words';

export function* fetchDictionaryData({ query }) {
  try {
    const url = `${ROOT_URL}?md=pd&sp=${query}`;
    const response = yield call(axios.get, url);
    yield put({
      type: types.FETCH_DATA_SUCCESS,
      data: response.data
    });
  } catch (error) {
    console.log('Request failed! Could not fetch dictionary data.');
    yield put({
      type: types.FETCH_DATA_FAIL,
      data: error
    });
  }
}

export function* fetchAntonymsData({ word }) {
  try {
    const url = `${ROOT_URL}?rel_ant=${word}`;
    const response = yield call(axios.get, url);
    yield put({
      type: types.FETCH_ANTONYMS_SUCCESS,
      data: response.data,
      word
    });
  } catch (error) {
    console.log(`Request failed! Could not fetch antonyms data for ${word}`);
    yield put({
      type: types.FETCH_ANTONYMS_FAIL,
      data: error
    });
  }
}

export function* fetchSynonymsData({ word }) {
  try {
    const url = `${ROOT_URL}?rel_syn=${word}`;
    const response = yield call(axios.get, url);
    yield put({
      type: types.FETCH_SYNONYMS_SUCCESS,
      data: response.data,
      word
    });
  } catch (error) {
    console.log(`Request failed! Could not fetch synonyms data for ${word}`);
    yield put({
      type: types.FETCH_SYNONYMS_FAIL,
      data: error
    });
  }
}

export function* search() {
  yield all([
    takeLatest(types.FETCH_DATA_LOAD, fetchDictionaryData),
    takeEvery(types.FETCH_ANTONYMS_LOAD, fetchAntonymsData),
    takeEvery(types.FETCH_SYNONYMS_LOAD, fetchSynonymsData)  
  ])
}
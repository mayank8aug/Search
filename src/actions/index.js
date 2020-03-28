export const types = {
  FETCH_DATA_LOAD: 'FETCH_DATA_LOAD',
  FETCH_DATA_SUCCESS: 'FETCH_DATA_SUCCESS',
  FETCH_DATA_FAIL: 'FETCH_DATA_FAIL',
  UPDATE_CURRENT_PAGE: 'UPDATE_CURRENT_PAGE',
  FETCH_SYNONYMS_LOAD: 'FETCH_SYNONYMS_LOAD',
  FETCH_SYNONYMS_SUCCESS: 'FETCH_SYNONYMS_SUCCESS',
  FETCH_SYNONYMS_FAIL: 'FETCH_SYNONYMS_FAIL',
  FETCH_ANTONYMS_LOAD: 'FETCH_ANTONYMS_LOAD',
  FETCH_ANTONYMS_SUCCESS: 'FETCH_ANTONYMS_SUCCESS',
  FETCH_ANTONYMS_FAIL: 'FETCH_ANTONYMS_FAIL'
};

export function fetchData(query) {
  return { type: types.FETCH_DATA_LOAD, query };
}

export function updateCurrentPage(pageNo) {
  return { type: types.UPDATE_CURRENT_PAGE, pageNo };
}

export function fetchSynonyms(word) {
  return { type: types.FETCH_SYNONYMS_LOAD, word };
}

export function fetchAntonyms(word) {
  return { type: types.FETCH_ANTONYMS_LOAD, word };
}
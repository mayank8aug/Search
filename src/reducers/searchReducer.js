const initialState = {
  loading: '',
  searchedData: null,
  currentPage: 0,
  antonyms: {},
  synonyms: {},
  fetchDataFail: false
};
const search = (prevState = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_LOAD':
      return Object.assign({}, prevState, {
        loading: true,
        fetchDataFail: false
      });
    case 'FETCH_DATA_SUCCESS':
      return Object.assign({}, prevState, {
        loading: false,
        searchedData: action.data,
        currentPage: 0
      });
    case 'FETCH_DATA_FAIL':
      return Object.assign({}, prevState, {
        loading: false,
        fetchDataFail: true
      });
    case 'UPDATE_CURRENT_PAGE':
      return Object.assign({}, prevState, {
        currentPage: action.pageNo
      });
    case 'FETCH_ANTONYMS_SUCCESS':
      const prevAntonyms = prevState.antonyms;
      // update antonyms state
      if (!prevAntonyms[action.word]) {
        prevAntonyms[action.word] = action.data;
      }
      return Object.assign({}, prevState, {
        antonyms: prevAntonyms
      });
    case 'FETCH_SYNONYMS_SUCCESS':
      const prevSynonyms = prevState.synonyms;
      // update antonyms state
      if (!prevSynonyms[action.word]) {
        prevSynonyms[action.word] = action.data;
      }
      return Object.assign({}, prevState, {
        synonyms: prevSynonyms
      });
    default:
      return prevState;
  }
}

export default search;
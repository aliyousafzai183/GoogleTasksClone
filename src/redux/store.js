import { createStore } from 'redux';

// initial state of redux
const initialState = {
  fetchData: false,
  modalVisible: false,
}

// that function will change the state
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_FETCH':
      return { ...state, fetchData: !state.fetchData };
    case 'TOGGLE_MODAL':
      return { ...state, modalVisible: !state.modalVisible };
      default:
      return state;
  }
}

const store = createStore(reducer);

export default store;

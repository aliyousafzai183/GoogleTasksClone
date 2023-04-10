import { createStore } from 'redux';

const initialState = {
  refreshPage: false,
  modalVisible: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_REFRESH':
      return { ...state, refreshPage: !state.refreshPage };
    case 'TOGGLE_MODAL':
      return { ...state, modalVisible: !state.modalVisible };
      default:
      return state;
  }
}

const store = createStore(reducer);

export default store;

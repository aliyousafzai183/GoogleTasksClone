import { createStore } from 'redux';

const initialState = {
  refreshPage: false,
  modalVisible: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_NIGHT_MODE':
      return { ...state, refreshPage: !state.refreshPage };
    case 'TOGGLE_MODAL_VISIBLE':
      return { ...state, modalVisible: !state.modalVisible };
      default:
      return state;
  }
}

const store = createStore(reducer);

export default store;

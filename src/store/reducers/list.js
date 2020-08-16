import { combineReducers } from 'redux';

import { GET_ALL_LIST } from '../actionTypes';

const initialState = {
  isFetching: false,
  success: false,
  rejected: false,
  data: null,
  error: null
};

const getAllLists = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ALL_LIST}_REQUEST`:
      return {
        ...state,
        isFetching: true,
        success: false,
        rejected: false,
        data: null,
        error: null
      };
    case `${GET_ALL_LIST}_SUCCESS`:
      return {
        ...state,
        isFetching: false,
        success: true,
        rejected: false,
        data: action.data,
        error: null
      };
    case `${GET_ALL_LIST}_REJECT`:
      return {
        ...state,
        isFetching: false,
        success: false,
        rejected: true,
        data: null,
        error: action.error
      };
    default:
      return state;
  }
};

export default combineReducers({
  all: getAllLists
});

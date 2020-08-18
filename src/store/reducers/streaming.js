import { combineReducers } from 'redux';

import { GET_STREAMING } from '../actionTypes';

const initialState = {
  isFetching: false,
  success: false,
  rejected: false,
  data: null,
  error: null
};

const getStreaming = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_STREAMING}_REQUEST`:
      return {
        ...state,
        isFetching: true,
        success: false,
        rejected: false,
        data: null,
        error: null
      };
    case `${GET_STREAMING}_SUCCESS`:
      return {
        ...state,
        isFetching: false,
        success: true,
        rejected: false,
        data: action.data,
        error: null
      };
    case `${GET_STREAMING}_REJECT`:
      return {
        ...state,
        isFetching: false,
        success: false,
        rejected: true,
        data: null,
        error: action.error
      };
    case `${GET_STREAMING}_RESET`:
      return initialState;
    default:
      return state;
  }
};

export default combineReducers({
  selected: getStreaming
});

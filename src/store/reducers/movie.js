import { combineReducers } from 'redux';

import { GET_MOVIE } from '../actionTypes';

const initialState = {
  isFetching: false,
  success: false,
  rejected: false,
  data: null,
  error: null
};

const getMovie = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_MOVIE}_REQUEST`:
      return {
        ...state,
        isFetching: true,
        success: false,
        rejected: false,
        data: null,
        error: null
      };
    case `${GET_MOVIE}_SUCCESS`:
      return {
        ...state,
        isFetching: false,
        success: true,
        rejected: false,
        ...action.data,
        error: null
      };
    case `${GET_MOVIE}_REJECT`:
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
  selected: getMovie
});

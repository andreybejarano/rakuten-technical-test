import { GET_MOVIE } from '../actionTypes';
import MovieService from '@/services/Movie';

export const getMovie = (id) => {
  return async dispatch => {
    dispatch({
      type: `${GET_MOVIE}_REQUEST`
    });
    try {
      const movie = await MovieService.getMovie(id);
      return dispatch({
        type: `${GET_MOVIE}_SUCCESS`,
        data: movie
      });
    } catch (error) {
      return dispatch({
        type: `${GET_MOVIE}_REJECT`,
        error
      });
    }
  };
};

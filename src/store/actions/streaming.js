import { GET_STREAMING } from '../actionTypes';
import StreamService from '@/services/Streaming';

export const getStreaming = (id) => {
  return async dispatch => {
    dispatch({
      type: `${GET_STREAMING}_REQUEST`
    });
    try {
      const stream = await StreamService.getStreaming(id);
      return dispatch({
        type: `${GET_STREAMING}_SUCCESS`,
        data: stream.data
      });
    } catch (error) {
      return dispatch({
        type: `${GET_STREAMING}_REJECT`,
        error
      });
    }
  };
};

export const resetStreaming = () => {
  return dispatch =>
    dispatch({
      type: `${GET_STREAMING}_RESET`
    });
};

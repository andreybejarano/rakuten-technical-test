import { GET_ALL_LIST } from '../actionTypes';
import ListService from '@/services/List';

export const getAllLists = () => {
  return async dispatch => {
    dispatch({
      type: `${GET_ALL_LIST}_REQUEST`
    });
    try {
      let lists = await Promise.allSettled([
        ListService.getList('populares-en-taquilla'),
        ListService.getList('estrenos-para-toda-la-familia'),
        ListService.getList('estrenos-imprescindibles-en-taquilla'),
        ListService.getList('estrenos-espanoles'),
        ListService.getList('si-te-perdiste'),
        ListService.getList('especial-x-men'),
        ListService.getList('nuestras-preferidas-de-la-semana')
      ]);
      lists = lists.map(list => {
        return {
          status: list.status,
          list: list.value ? list.value.data : undefined
        };
      });
      return dispatch({
        type: `${GET_ALL_LIST}_SUCCESS`,
        data: lists
      });
    } catch (error) {
      return dispatch({
        type: `${GET_ALL_LIST}_REJECT`,
        error
      });
    }
  };
};

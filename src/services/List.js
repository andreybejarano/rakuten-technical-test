import request from 'Utils/request';
import uriparser from 'simple-uriparser';

import config from 'Config';

export default class List {
  static async getList(list) {
    try {
      const url = uriparser.parser(config.endpoints.list, { list });
      const options = {
        method: 'GET'
      };
      const { data } = await request(url, options);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}

import request from 'Utils/request';
import uriparser from 'simple-uriparser';

import config from 'Config';

export default class Movie {
  static async getMovie(id) {
    try {
      const url = uriparser.parser(config.endpoints.movie, { id });
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

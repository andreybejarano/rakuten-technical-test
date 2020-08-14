import axios from 'axios';

export default function request(url, options = {}) {
  return axios({
    method: options.method,
    url,
    data: options.body,
    headers: options.headers
  });
}

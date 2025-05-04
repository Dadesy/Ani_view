import axios from 'axios';

const instance = axios.create({
  baseURL: `https://api.cdnlibs.org`,
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Site-Id': '5',
  }
});

export default instance;

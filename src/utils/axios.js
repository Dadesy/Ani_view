import axios from 'axios';
const instance = axios.create({
    baseURL: `https://api.cdnlibs.org`,
    withCredentials: true,
    headers: {
        'Site-Id': '5',
    }
});
export default instance;
//# sourceMappingURL=axios.js.map
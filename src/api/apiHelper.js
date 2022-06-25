import axios from 'axios';
import { API_ROOT } from '../config';

//create instance
const instance = axios.create({
    baseURL: API_ROOT,
});

// Add a request interceptor
instance.interceptors.request.use(
    async (config) => {
        config.headers['Content-Type'] = 'application/json';
        return config;
    },
    (error) => {
        if (error.response && error.response) {
            return Promise.reject(error.response);
        }
        return Promise.reject(error);
    },
);

//Add a response interceptor
instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 403) {
            return;
        }
        // return Error object with Promise
        return Promise.reject(error.response);
    },
);

export default instance;

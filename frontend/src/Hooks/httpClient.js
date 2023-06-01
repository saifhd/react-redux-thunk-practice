import axios from "axios";

const httpClient = axios.create({
    baseURL: 'http://localhost:8000/api/v1',
    // timeout: 1000,
    headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}
});

let store

export const injectStore = _store => {
  store = _store
}

httpClient.interceptors.request.use(function (config) {
    const accessToken = store.getState().auth.accessToken;
    config.headers.Authorization = 'Bearer '+ accessToken;
    return config;
}, function (error) {
    return Promise.reject(error);
});

httpClient.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if (error.response.data.message === 'Unauthenticated.' && error.response.status === 401) {
        console.log('log failed 13456')
        return window.location = "/login"
        
    }r
    return Promise.reject(error);
});

export default httpClient;
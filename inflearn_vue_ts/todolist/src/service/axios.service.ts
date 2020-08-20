import axios, { AxiosInstance } from 'axios';

export default class AxiosService {
    public static readonly instance: AxiosInstance = axios.create({
        baseURL: 'http://localhost:8080',
        timeout: 100000,
    });
}

import axios from 'axios';

const clientAxios = axios.create({
    baseURL : 'https://mundo-pokemon-back.onrender.com'
});

export default clientAxios;
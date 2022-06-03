import axios from 'axios';

const clientAxios = axios.create({
    baseURL : 'https://pi-pokemon-oliver.herokuapp.com'
});

export default clientAxios;
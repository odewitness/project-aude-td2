import axios from 'axios';

export function getAllCountries() {
    return axios.get('https://restcountries.com/v2/all')
        .then(response => response.data)
        .catch(error => console.error(error));
}
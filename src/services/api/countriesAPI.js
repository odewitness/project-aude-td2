// import axios from 'axios'

// export default {
//     name: 'HelloWorld',
//     data() {
//         return {
//             pays: null,
//         }
//     },
//     mounted() {
//         axios
//             .get('https://restcountries.com/v2/all')
//             .then((reponse) => {
//                 this.pays = reponse.data;
//                 console.log(this.pays)
//             });
//     },
// }

// export async function getCountryData(id, rcv_data) {
//     const response = await axios
//         .get(`/sign-up/${id}/`, rcv_data)
//     return response.data.user;

// }

import axios from 'axios';

export function getAllCountries() {
    return axios.get('https://restcountries.com/v2/all')
        .then(response => response.data)
        .catch(error => console.error(error));
}
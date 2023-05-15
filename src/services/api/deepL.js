const axios = require('axios');

const deepLKey = 'bd204266-33f5-fe27-a346-1019a0120b19:fx';

function translateLanguage(language) {
    const url = `https://api-free.deepl.com/v2/translate?auth_key=${deepLKey}&text=${encodeURIComponent(language)}&target_lang=fr`;
    return axios.get(url)
        .then(response => {
            return response.data.translations[0].text;
        })
        .catch(error => {
            console.log(error);
        });
}

function translateLanguagesForCountries(countries) {
    const promises = [];
    for (let country of countries) {
        for (let language of country.languages) {
            promises.push(translateLanguage(language.name));
        }
    }
    return Promise.all(promises);
}

// Example usage
const countries = [
    { name: 'France', languages: [{ name: 'French' }] },
    { name: 'Spain', languages: [{ name: 'Spanish' }, { name: 'Catalan' }] }
];

translateLanguagesForCountries(countries)
    .then(translations => {
        console.log(translations);
    });
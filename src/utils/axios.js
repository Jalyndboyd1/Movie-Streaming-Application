const axios = require("axios").default

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});



module.exports = instance
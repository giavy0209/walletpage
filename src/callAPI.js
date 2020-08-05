const axios = require('axios')
const API_DOMAIN = 'https://pro-api.coinmarketcap.com'
const calAPI = axios.create({
    baseURL: API_DOMAIN,
    headers: {
        'X-CMC_PRO_API_KEY': 'dc2486e5-0318-41f4-8c1c-abe42d038c84',
        'Accept' : 'application/json',
        'Accept-Encoding' : 'deflate, gzip'
    }
});

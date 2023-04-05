let apiUrl;
const expressPort = 5000;
const apiURL = {
    development: `http://localhost:5000`,
    production: `https://example`
}

if(window.location.hostname === 'localhost') {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}

export default apiUrl;
let apiUrl;
const expressPort = 5000;
const apiUrls = {
    development: `http://localhost:${expressPort}`,
    production: `https://love-letters-frontend.netlify.app`
}

if(window.location.hostname === 'localhost') {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}

export default apiUrl;
let apiUrl;
const expressPort = 5000;
const apiUrls = {
    development: `http://localhost:${expressPort}`,
    production: `https://love-letters.fly.dev`
}

if(window.location.hostname === 'localhost'|| window.location.hostname === '127.0.0.1') {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}

export default apiUrl;
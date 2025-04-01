import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.default.withXSRFToken=true;
window.axios.default.withCredentials=true;

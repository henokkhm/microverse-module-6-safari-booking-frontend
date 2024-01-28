const BaseUrl = 'http://127.0.0.1:3000/';

const HEADERS = { headers: { Authorization: localStorage.getItem('token') } };

export { HEADERS };
export default BaseUrl;

const BaseUrl = 'http://127.0.0.1:3000/';

const getHeaders = () => ({ headers: { Authorization: localStorage.getItem('token') } });

export { getHeaders };
export default BaseUrl;

import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import BaseUrl from '../api/api_helper';
import NovaFormInput from './shared/NovaFormInput ';

const LoginForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = new FormData(e.target);
    await axios.post(`${BaseUrl}api/auth/login`, loginData).then((response) => {
      const token = response.headers.authorization;
      if (token && token !== '') {
        localStorage.setItem('token', token);
      }

      if (location.pathname === '/signin') {
        navigate('/');
      } else {
        navigate(location.pathname);
      }
    }).catch((err) => {
      document.getElementById('msg').textContent = `${err.response ? err.response.data : err.message}!`;
    });
    e.target.reset();
  };

  return (
    <form
      action="submit"
      onSubmit={handleSubmit}
      className="grid pt-4 pb-1 items-center space-y-6 w-full"
    >
      <NovaFormInput
        cId="user[username]"
        cMinLen="2"
        cPlaceholder="Enter your username"
        isRequired
      />
      <NovaFormInput
        cType="password"
        cId="user[password]"
        cMinLen="6"
        cPlaceholder="Enter your Password"
        isRequired
      />
      <button
        type="submit"
        className="opacity-90 w-full py-2 tracking-wide text-white transition-colors duration-200 transform bg-lime-400 rounded-md hover:bg-lime-300 focus:outline-lime-500 hover:font-extrabold"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;

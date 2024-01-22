import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BaseUrl from '../api/api_helper';
import NovaFormInput from './shared/NovaFormInput ';

/* eslint-disable no-alert, no-console, no-restricted-syntax, max-len */
const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = new FormData(e.target);
    await axios.post(`${BaseUrl}api/auth/login`, loginData).then((response) => {
      const token = response.headers.authorization;
      if (token && token !== '') {
        localStorage.setItem('token', token);
        console.log(token);
        navigate('/');
      }
    }).catch((err) => {
      document.getElementById('msg').textContent = `${err.response ? err.response.data : err.message}!`;
    });
    console.log(loginData);
    e.target.reset();
  };
  return (
    <div className="flex flex-col bg-[url('./assets/safari-a.jpg')] w-full bg-cover shadow-md items-center justify-center border-solid border p-4 sm:w-[600px]">
      <p className="text-md text-red-600 text-center mb-3" id="msg" />
      <h2>Sign in to your Safari account</h2>
      <form action="submit" onSubmit={handleSubmit} className="grid pt-4 pb-1 items-center space-y-6 w-full">
        <NovaFormInput cId="user[email]" cMinLen="2" cPlaceholder="Enter your name" isRequired />
        <NovaFormInput cType="password" cId="user[password]" cMinLen="6" cPlaceholder="Enter your Password" isRequired />
        <button type="submit" className="opacity-90 w-full py-2 tracking-wide text-white transition-colors duration-200 transform bg-lime-400 rounded-md hover:bg-lime-300 focus:outline-lime-500 hover:font-extrabold">Login</button>
      </form>
      <div className="link-cus">
        Don&apos;t have an account?
        <a
          href="/#"
          className="link-cus-title"
        >
          Sign up
        </a>
      </div>
    </div>
  );
};

export default Login;

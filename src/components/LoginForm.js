import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BaseUrl from '../api/api_helper';
import NovaFormInput from './shared/NovaFormInput ';

const LoginForm = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = new FormData(e.target);
    await axios
      .post(`${BaseUrl}api/auth/login`, loginData)
      .then((response) => {
        const token = response.headers.authorization;
        const userData = response.data;
        if (token && token !== '') {
          localStorage.setItem('token', token);
          localStorage.setItem('user_id', userData.data.id);
          localStorage.setItem('role', userData.data.role);
          navigate('app/safaris');
        }
      })
      .catch((err) => {
        document.getElementById('msg').textContent = `${
          err.response ? err.response.data : err.message
        }!`;
      });
    e.target.reset();
  };

  return (
    <form action="submit" onSubmit={handleSubmit} className="form">
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
      <button type="submit" className="btn-primary">
        Login
      </button>
      <div className="error-msg" id="msg" />
    </form>
  );
};

export default LoginForm;

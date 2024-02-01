import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BaseUrl from '../api/api_helper';
import NovaFormInput from './shared/NovaFormInput ';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const registrationData = new FormData(e.target);
    await axios
      .post(`${BaseUrl}/api/auth/signup`, registrationData)
      .then((response) => {
        const token = response.headers.authorization;
        if (token && token !== '') {
          localStorage.setItem('token', token);
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
        cId="email"
        cMinLen="5"
        cType="email"
        cPlaceholder="Email"
        isRequired
      />
      <NovaFormInput
        cId="password"
        cMinLen="4"
        cType="password"
        cPlaceholder="Password"
        isRequired
      />
      <NovaFormInput
        cId="first-name"
        cMinLen="4"
        cPlaceholder="First Name"
        isRequired
      />
      <NovaFormInput
        cId="username"
        cMinLen="4"
        cPlaceholder="Username"
        isRequired
      />
      <NovaFormInput
        cId="phone"
        cMinLen="4"
        cType="number"
        cPlaceholder="Phone Number"
        isRequired
      />
      <button type="submit" className="btn-primary">
        Sign Up
      </button>
    </form>
  );
};

export default RegistrationForm;

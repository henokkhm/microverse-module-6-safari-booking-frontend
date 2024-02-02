import axios from 'axios';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';
import BaseUrl from '../api/api_helper';
import NovaFormInput from './shared/NovaFormInput ';

const RegistrationForm = ({ isAdmin }) => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const registrationData = new FormData(e.target);
    // TODO: use separate endpoint to create Admin users
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
      {isAdmin && (
        <label htmlFor="is-admin" className="flex gap-2 text-xl items-center text-gray-400">
          <input id="is-admin" type="checkbox" name="isAdmin" checked disabled className="bg-st-green-400" />
          <span>Is admin</span>
        </label>
      )}
      {isAdmin ? (
        <button type="submit" className="btn-primary w-64">
          Add Admin
        </button>
      ) : (
        <button type="submit" className="btn-primary">
          Sign Up
        </button>
      )}
      <div className="error-msg" id="msg" />
    </form>
  );
};

RegistrationForm.propTypes = {
  isAdmin: PropTypes.bool,
};

RegistrationForm.defaultProps = {
  isAdmin: false,
};

export default RegistrationForm;

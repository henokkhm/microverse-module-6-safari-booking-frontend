import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BaseUrl from '../api/api_helper';

const useLoginStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token && token !== '') {
      setIsLoggedIn(true);
    }
  }, [token]);
  return isLoggedIn;
};

export const useSignOut = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const handleSignOut = async () => {
    await axios.delete(`${BaseUrl}api/auth/logout`, { headers: { Authorization: token } })
      .then(() => {
        localStorage.clear();
      })
      .then(() => {
        window.location.reload();
        navigate('/');
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
  return handleSignOut;
};

export default useLoginStatus;

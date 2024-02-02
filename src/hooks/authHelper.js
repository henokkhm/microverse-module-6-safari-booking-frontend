import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BaseUrl from '../api/api_helper';

const useLoginStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && token !== '') {
      setIsLoggedIn(true);
    }
  }, []);
  return isLoggedIn;
};

export const useSignOut = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const handleSignOut = async () => {
    await axios
      .delete(`${BaseUrl}api/auth/logout`, {
        headers: { Authorization: token },
      })
      .then(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('user_id');
        localStorage.removeItem('role');
      })
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        // Ignore expired session
        if (err.message === 'Request failed with status code 401') {
          localStorage.removeItem('token');
          return navigate('/');
        }
        throw new Error(err);
      });
  };
  return handleSignOut;
};

export default useLoginStatus;

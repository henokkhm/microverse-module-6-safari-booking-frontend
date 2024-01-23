import { useEffect, useState } from 'react';
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
  const handleSignOut = () => {
    fetch(`${BaseUrl}/api/auth/logout`, {
      method: 'DELETE',
      headers: {
        'Content-Type': '*/*',
        Authorization: localStorage.getItem('token'),
      },
    })
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

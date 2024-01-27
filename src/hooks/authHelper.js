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

export default useLoginStatus;

import { useEffect, useState } from 'react';

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

export default useLoginStatus;

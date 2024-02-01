import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import MyRoutes from './components/MyRoutes';
import useLoginStatus from './hooks/authHelper';

function App() {
  const navigate = useNavigate();
  const { isLoggedIn } = useLoginStatus();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('safaris');
    }
    navigate('login');
  }, [isLoggedIn, navigate]);

  return (
    <>
      <MyRoutes />
    </>
  );
}

export default App;

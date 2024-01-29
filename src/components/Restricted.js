import PropTypes from 'prop-types';
import { Toaster } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Login from '../pages/Login';
import showMessage from '../helpers';
import useLoginStatus from '../hooks/authHelper';

const Restricted = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = useLoginStatus();
  useEffect(() => {
    if (!isLoggedIn) {
      showMessage('You are not signed in!');
    }
  }, [isLoggedIn]);

  return isLoggedIn === true ? (
    <>
      {children}
    </>
  ) : (
    <>
      <div className="relative top-24 text-red-500 z-10 text-lg text-right pr-6">
        <Toaster />
      </div>
      {location && <span className="text-red-500 z-10 text-lg">You are not Signin! Please Signin to continue</span>}
      <Login />
    </>
  );
};

Restricted.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Restricted;

import PropTypes from 'prop-types';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import Homepage from '../pages/Home';
import showMessage from '../helpers';
import useLoginStatus from '../hooks/authHelper';

const Restricted = ({ children }) => {
  const isLoggedIn = useLoginStatus();
  useEffect(() => {
    if (!isLoggedIn) {
      showMessage('You are not signed in!');
    }
  }, [isLoggedIn]);

  return isLoggedIn === true ? (
    <>
      <div className="relative top-24 text-red-500 z-10 text-lg text-right pr-6">
        <Toaster />
      </div>
      {children}
    </>
  ) : (
    <>
      <div className="relative top-24 text-red-500 z-10 text-lg text-right pr-6">
        <Toaster />
      </div>
      <Homepage />
    </>
  );
};

Restricted.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Restricted;

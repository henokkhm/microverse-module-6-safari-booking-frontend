import PropTypes from 'prop-types';
import { useEffect } from 'react';

function Overlay({ handleClick }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, []);
  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 z-10 bg-[#707f7088] backdrop-blur-3xl duration-100"
      onClick={handleClick}
      role="presentation"
    />
  );
}

Overlay.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Overlay;

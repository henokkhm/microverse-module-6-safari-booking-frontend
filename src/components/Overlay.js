import PropTypes from 'prop-types';

function Overlay({ handleClick }) {
  return <div className="fixed top-0 bottom-0 left-0 right-0 z-10 bg-[#a0afa033] backdrop-blur-sm duration-100" onClick={handleClick} role="presentation" />;
}

Overlay.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Overlay;

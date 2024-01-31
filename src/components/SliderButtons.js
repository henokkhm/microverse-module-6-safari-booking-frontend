import PropTypes from 'prop-types';

import triangleIcon from '../assets/icons/triangle.svg';

export function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <button
      type="button"
      className={className}
      style={{ display: 'block', background: 'red' }}
      onClick={onClick}
    >
      <img src={triangleIcon} alt="carousel previous button" />
    </button>
  );
}

export function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button
      type="button"
      className={className}
      style={{ display: 'block', background: 'green' }}
      onClick={onClick}
    >
      <img className="rotate-180" src={triangleIcon} alt="carousel next button" />
    </button>
  );
}

const sliderArrowsProptypes = {
  className: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

PrevArrow.propTypes = sliderArrowsProptypes;
NextArrow.propTypes = sliderArrowsProptypes;

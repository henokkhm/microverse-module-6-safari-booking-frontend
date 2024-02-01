import PropTypes from 'prop-types';

import triangleIcon from '../assets/icons/triangle.svg';

export function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      type="button"
      className="block bg-st-green-400 p-8 pl-16 rounded-r-full"
      onClick={onClick}
    >
      <img className="w-32" src={triangleIcon} alt="carousel previous button" />
    </button>
  );
}

export function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      type="button"
      className="block bg-st-green-400 p-8 pr-16  rounded-l-full"
      onClick={onClick}
    >
      <img className="rotate-180 w-32" src={triangleIcon} alt="carousel next button" />
    </button>
  );
}

const sliderArrowsProptypes = {
  onClick: PropTypes.func.isRequired,
};

PrevArrow.propTypes = sliderArrowsProptypes;
NextArrow.propTypes = sliderArrowsProptypes;

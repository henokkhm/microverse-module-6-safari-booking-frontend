import PropTypes from 'prop-types';

import facebookIcon from '../assets/icons/socials/facebook_2.svg';
import twitterIcon from '../assets/icons/socials/twitter_2.svg';
import instagramIcon from '../assets/icons/socials/instagram.svg';

function SafariCard({ coverImageURL, name, description }) {
  const shortDescription = description.split('\n\n')[0];

  return (
    <div className="flex flex-col my-8 gap-4 text-center items-center max-w-[28rem] mx-8 cursor-pointer hover:scale-105 duration-200 hover:border-gray-100 border-2 border-transparent">
      <div>
        <img src={`/safaris/${coverImageURL}`} alt={`photograph of ${name}`} />
      </div>
      <div className="pt-2 pb-8">
        <h3 className="text-xl uppercase font-bold py-6">{name}</h3>
        <div className="border-b-4 mb-6 mx-auto border-dotted border-gray-200 w-24" />
        <p className="text-gray-400 px-2 pb-6 leading-7">{shortDescription}</p>
        <div className="flex gap-3 justify-center items-center">
          <img className="social-icon" src={facebookIcon} alt="facebook icon" />
          <img className="social-icon" src={twitterIcon} alt="twitter icon" />
          <img
            className="social-icon"
            src={instagramIcon}
            alt="instagram icon"
          />
        </div>
      </div>
    </div>
  );
}

SafariCard.propTypes = {
  coverImageURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SafariCard;

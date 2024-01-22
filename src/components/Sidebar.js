import { NavLink } from 'react-router-dom';

import logoSmall from '../assets/logo-small.svg';
import hamburgerIcon from '../assets/icons/hamburger.svg';
import twitterIcon from '../assets/icons/socials/twitter.svg';
import facebookIcon from '../assets/icons/socials/facebook.svg';
import googlePlusIcon from '../assets/icons/socials/google-plus.svg';
import vimeoIcon from '../assets/icons/socials/vimeo.svg';
import pinterestIcon from '../assets/icons/socials/pinterest.svg';

function Sidebar() {
  return (
    <div>
      {/* Logo */}
      <div>
        <NavLink to="/">
          <img className="w-52" src={logoSmall} alt="SafariTrek Logo" />
        </NavLink>
      </div>

      {/* Hamburger Menu */}
      <button type="button">
        <img src={hamburgerIcon} alt="hamburger menu icon" />
      </button>

      {/* Navigation */}
      <nav>
        <ul>
          <li>
            <NavLink to="/">Safaris</NavLink>
          </li>
          <li>
            <NavLink to="/reserve">Reserve</NavLink>
          </li>
          <li>
            <NavLink to="/my-reservations">My Reservations</NavLink>
          </li>
          <li>
            <NavLink to="/add-safari">Add Safari</NavLink>
          </li>
          <li>
            <NavLink to="/delete-safari">Delete Safari</NavLink>
          </li>
        </ul>
      </nav>

      {/* Log out button */}

      {/* Social Media Links */}
      <section>
        <ul>
          <li>
            <a href="/">
              <img src={twitterIcon} alt="twitter icon" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={facebookIcon} alt="facebook icon" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={googlePlusIcon} alt="google plus icon" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={vimeoIcon} alt="vimeo icon" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={pinterestIcon} alt="pinterest icon" />
            </a>
          </li>
        </ul>
      </section>

      {/* Copyrights */}
      <span>© 2024</span>
    </div>
  );
}

export default Sidebar;

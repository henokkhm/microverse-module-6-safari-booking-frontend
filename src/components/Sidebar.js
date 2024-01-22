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
    <div className="fixed w-56 min-h-screen shadow-md bg-st-green-50 p-6 pr-0 flex flex-col gap-4">
      {/* Logo */}
      <div className="pr-6">
        <NavLink to="/">
          <img className="w-48" src={logoSmall} alt="SafariTrek Logo" />
        </NavLink>
      </div>

      {/* Hamburger Menu */}
      <button
        className="absolute right-[-20px] top-28 h-10 w-10 bg-white shadow-md border-2 border-st-green-50 rounded-full flex items-center justify-center hover:scale-105"
        type="button"
      >
        <img src={hamburgerIcon} alt="hamburger menu icon" />
      </button>

      {/* Navigation */}
      <nav className="mt-16">
        <ul className="flex flex-col gap-2">
          <li>
            <NavLink
              className="nav-link"
              to="/"
            >
              Safaris
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/reserve">
              Reserve
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/my-reservations">
              My Reservations
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/add-safari">
              Add Safari
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/delete-safari">
              Delete Safari
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Log out button */}

      {/* Social Media Links */}
      <section className="mt-auto">
        <ul className="flex gap-3 items-center justify-center">
          <li>
            <a href="/">
              <img
                className="social-icon"
                src={twitterIcon}
                alt="twitter icon"
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                className="social-icon"
                src={facebookIcon}
                alt="facebook icon"
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                className="social-icon"
                src={googlePlusIcon}
                alt="google plus icon"
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img className="social-icon" src={vimeoIcon} alt="vimeo icon" />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                className="social-icon"
                src={pinterestIcon}
                alt="pinterest icon"
              />
            </a>
          </li>
        </ul>
      </section>

      {/* Copyrights */}
      <p className="text-center text-sm uppercase">© 2024</p>
    </div>
  );
}

export default Sidebar;

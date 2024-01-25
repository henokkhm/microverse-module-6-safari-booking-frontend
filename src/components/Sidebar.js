import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import logoSmall from '../assets/logo-small.svg';
import hamburgerIcon from '../assets/icons/hamburger.svg';
import closeIcon from '../assets/icons/close.svg';
import twitterIcon from '../assets/icons/socials/twitter.svg';
import facebookIcon from '../assets/icons/socials/facebook.svg';
import googlePlusIcon from '../assets/icons/socials/google-plus.svg';
import vimeoIcon from '../assets/icons/socials/vimeo.svg';
import pinterestIcon from '../assets/icons/socials/pinterest.svg';
import Overlay from './Overlay';

import useWindowSize from '../hooks/useWindowSize';
import useLoginStatus, { useSignOut } from '../hooks/authHelper';

function Sidebar({ sidebarMenuIsOpen, toggleSidebarMenu, breakpoint }) {
  const { windowWidth } = useWindowSize();
  const isLoggedIn = useLoginStatus();
  const handleSignOut = useSignOut();

  const handleSidebarClose = () => {
    if (sidebarMenuIsOpen) {
      toggleSidebarMenu();
    }
  };

  const isMobileScreen = windowWidth <= breakpoint;
  const showOverlay = isMobileScreen && sidebarMenuIsOpen;
  const hideSidebar = isMobileScreen && !sidebarMenuIsOpen;

  return (
    <>
      {showOverlay && <Overlay handleClick={handleSidebarClose} />}
      <div
        className={`${hideSidebar && 'translate-x-[-14rem]'} 
        fixed duration-300 z-20 w-56 min-h-screen shadow-md bg-st-green-50 p-6 pr-0 flex flex-col gap-4`}
      >
        {/* Logo */}
        <div className="pr-6">
          <NavLink to="/" onClick={handleSidebarClose}>
            <img className="w-48" src={logoSmall} alt="SafariTrek Logo" />
          </NavLink>
        </div>

        {/* Hamburger Menu */}
        {isMobileScreen && (
          <button
            className={`${
              !sidebarMenuIsOpen && 'translate-x-2'
            } absolute right-[-20px] top-28 h-10 w-10 bg-white shadow-md border-2 border-st-green-50 rounded-full flex items-center justify-center hover:scale-105`}
            type="button"
            onClick={toggleSidebarMenu}
          >
            {sidebarMenuIsOpen ? (
              <img src={closeIcon} alt="close hamburger menu" />
            ) : (
              <img src={hamburgerIcon} alt="open hamburger menu" />
            )}
          </button>
        )}

        {/* Navigation */}
        <nav className="mt-16">
          <ul className="flex flex-col gap-2">
            <li>
              <NavLink className="nav-link" onClick={handleSidebarClose} to="/">
                Safaris
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                onClick={handleSidebarClose}
                to="/reserve"
              >
                Reserve
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                onClick={handleSidebarClose}
                to="/my-reservations"
              >
                My Reservations
              </NavLink>
            </li>
            {isLoggedIn ? (
              <>
                <li>
                  <NavLink
                    className="nav-link"
                    onClick={handleSidebarClose}
                    to="/add-safari"
                  >
                    Add Safari
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link"
                    onClick={handleSidebarClose}
                    to="/delete-safari"
                  >
                    Delete Safari
                  </NavLink>
                </li>
                <li>
                  <button
                    type="button"
                    className="nav-link"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    className="nav-link"
                    onClick={handleSidebarClose}
                    to="/signin"
                  >
                    Sign In
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link"
                    onClick={handleSidebarClose}
                    to="/register"
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>

        {/* Log out button */}

        {/* Social Media Links */}
        <section className="mt-auto pr-6">
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
        <p className="text-center text-sm uppercase pr-6">© 2024</p>
      </div>
    </>
  );
}

Sidebar.propTypes = {
  sidebarMenuIsOpen: PropTypes.bool.isRequired,
  toggleSidebarMenu: PropTypes.func.isRequired,
  breakpoint: PropTypes.number.isRequired,
};

export default Sidebar;

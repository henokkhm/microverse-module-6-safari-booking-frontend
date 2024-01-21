import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div>
      {/* Logo */}
      <div>
        <NavLink to="/">Logo</NavLink>
      </div>

      {/* Hamburger Menu */}
      <button type="button">Hamburger Icon</button>

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
          <li>twitter</li>
          <li>fb</li>
          <li>google+</li>
          <li>vimeo</li>
          <li>pintrest</li>
        </ul>
      </section>

      {/* Copyrights */}
      <span>© 2024</span>
    </div>
  );
}

export default Sidebar;

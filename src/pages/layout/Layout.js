import { Outlet, Link } from 'react-router-dom';

const Layout = () => (
  <>
    <div className="flex justify-between">
      <Link to="/signin">Sign In</Link>
      <Link to="/logout">Sign Out</Link>
    </div>

    <div className="xl:ml-64">
      <Outlet />
    </div>
  </>
);

export default Layout;

import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

const Layout = () => (
  <>
    <Sidebar />

    <div className="xl:ml-64">
      <Outlet />
    </div>
  </>
);

export default Layout;

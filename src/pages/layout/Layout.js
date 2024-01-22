import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

const Layout = () => (
  <>
    <Sidebar />

    <main className="ml-96">
      <Outlet />
    </main>
  </>
);

export default Layout;

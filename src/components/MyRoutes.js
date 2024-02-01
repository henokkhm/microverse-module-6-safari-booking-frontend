import { useRoutes } from 'react-router-dom';
import Layout from '../pages/layout/Layout';
import Registration from './Registration';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Homepage from '../pages/Home';
import SafariDetails from '../pages/SafariDetails';
import Reserve from '../pages/Reserve';
import MyReservations from '../pages/MyReservations';
import AddSafari from '../pages/AddSafari';
import DeleteSafaris from '../pages/DeleteSafaris';
import Restricted from './Restricted';

const MyRoutes = () => useRoutes([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/safaris',
        element: <Homepage />,
      },
      {
        path: '/safari/:id',
        element: <SafariDetails />,
      },
      {
        path: '/reserve',
        element: <Reserve />,
      },
      {
        path: '/my-reservations',
        element: (
          <Restricted>
            <MyReservations />
          </Restricted>
        ),
      },
      {
        path: '/add-safari',
        element: (
          <Restricted>
            <AddSafari />
          </Restricted>
        ),
      },
      {
        path: '/delete-safari',
        element: <DeleteSafaris />,
      },

      {
        path: '/register',
        element: <Registration />,
      },
    ],
  },
  {
    path: '*',
    element: <div>Page not found</div>,
  },
]);

export default MyRoutes;

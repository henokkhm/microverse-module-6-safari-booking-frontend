import { useRoutes } from 'react-router-dom';
import Layout from '../pages/layout/Layout';
import LoginPage from '../pages/LoginPage';

const MyRoutes = () => useRoutes([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <>Safaris</>,
      },
      {
        path: '/safari/:id',
        element: <>Safari Details</>,
      },
      {
        path: '/reserve',
        element: <>Reserve</>,
      },
      {
        path: '/my-reservations',
        element: <>My Reservations</>,
      },
      {
        path: '/add-safari',
        element: <>Add a Safari</>,
      },
      {
        path: '/delete-safari',
        element: <>Delete Safaris</>,
      },
      {
        path: '/logout',
        element: <div>You are Logout from Safari</div>,
      },
      {
        path: '*',
        element: <div>Page not found</div>,
      },
    ],
  },
  {
    path: '/signin',
    element: <div className="flex justify-center item-center h-full mt-[10rem]"><LoginPage /></div>,
  },
  {
    path: '/signup',
    element: <>Reservation or Signup </>,
  },
]);

export default MyRoutes;

import { useRoutes } from 'react-router-dom';
import Login from './Login';
import Layout from '../layout/Layout';

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
        path: '/details/:id',
        element: <>Safaris</>,
      },
      {
        path: '/reserve',
        element: <>Reserve</>,
      },
      {
        path: '/myreservation',
        element: <>My Reservation</>,
      },
      {
        path: '/addSafari',
        element: <>Add Safaris</>,
      },
      {
        path: '/deleteSafari',
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
    element: <div className="flex justify-center item-center h-full mt-[10rem]"><Login /></div>,
  },
  {
    path: '/signup',
    element: <>Reservation or Signup </>,
  },
]);

export default MyRoutes;

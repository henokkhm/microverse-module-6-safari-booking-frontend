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
        element: <>Freelancers</>,
      },
      {
        path: '/details/:id',
        element: <>Freelancers</>,
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
        path: '/addfreelancer',
        element: <>Add Freelancers</>,
      },
      {
        path: '/deletefreelancer',
        element: <>Delete Freelancers</>,
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
    element: <div className="flex justify-center item-center h-full"><Login /></div>,
  },
  {
    path: '/signup',
    element: <>Reservation or Signup </>,
  },
]);

export default MyRoutes;

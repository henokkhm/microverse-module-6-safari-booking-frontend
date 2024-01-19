import { useRoutes } from 'react-router-dom';
import Login from './Login';

const MyRoutes = () => useRoutes([
  {
    path: '/',
    element: <>Layout</>,
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
        element: <div>Logout</div>,
      },
      {
        path: '*',
        element: <div>Page not found</div>,
      },
    ],
  },
  {
    path: '/signin',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <>Reservation or Signup </>,
  },
]);

export default MyRoutes;
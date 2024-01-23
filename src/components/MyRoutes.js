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

const MyRoutes = () => useRoutes([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
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
        element: <MyReservations />,
      },
      {
        path: '/add-safari',
        element: <AddSafari />,
      },
      {
        path: '/delete-safari',
        element: <DeleteSafaris />,
      },
      {
        path: '*',
        element: <div>Page not found</div>,
      },
      {
        path: '/signin',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/register',
        element: <Registration />,
      },
    ],
  },
]);

export default MyRoutes;

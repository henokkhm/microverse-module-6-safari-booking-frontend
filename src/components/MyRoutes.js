import { Routes, Route } from 'react-router-dom';
import Layout from '../pages/layout/Layout';
import Registration from '../pages/Registration';
import Login from '../pages/Login';
import Home from '../pages/Home';
import SafariDetails from '../pages/SafariDetails';
import MakeReservation from '../pages/MakeReservation';
import MyReservations from '../pages/MyReservations';
import RegisterAdmin from '../pages/RegisterAdmin';
import AddSafari from '../pages/AddSafari';
import DeleteSafaris from '../pages/DeleteSafaris';

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="signup" element={<Registration />} />
      <Route path="/app" element={<Layout />}>
        <Route path="safaris" element={<Home />} />
        <Route path="safari/:id" element={<SafariDetails />} />
        <Route path="make-reservation/:id?" element={<MakeReservation />} />
        <Route path="my-reservations" element={<MyReservations />} />
        <Route path="register-admin" element={<RegisterAdmin />} />
        <Route path="add-safari" element={<AddSafari />} />
        <Route path="delete-safari" element={<DeleteSafaris />} />
        {/* <Route path="register-an-admin" element={<AdminRegistration />} /> */}
      </Route>

      <Route path="*" element={<>Error 404: Page not found</>} />
    </Routes>
  );
}

export default MyRoutes;

import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import MyReservation from '../components/MyReservation';
import { getReservations } from '../redux/slices/reservationSlice';
import ProtectedRoute from '../components/ProtectedRoute';

const MyReservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    console.log('fetching reservations');
    dispatch(getReservations());
  }, [dispatch]);

  return (
    <ProtectedRoute>
      <main className="page-container">
        <div className="flex flex-col gap-8 h-screen w-full md:w-11/12 mx-auto ">
          <h1 className="header">
            My Reservations
          </h1>
          <div className="">
            {loading && (
              <p className="text-gray-500 text-2xl">Loading...</p>
            )}
            {reservations.length === 0 ? (
              <p className="">
                You have not booked any safaris. Please make a reservation
                {' '}
                <NavLink
                  className=""
                  to="/app/make-reservation"
                >
                  here
                </NavLink>
                .
              </p>
            ) : (
              reservations.map((reservation) => (
                <MyReservation key={reservation.id} reservation={reservation} />
              ))
            )}
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
};

export default MyReservations;

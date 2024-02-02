import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import MyReservation from '../components/MyReservation';
import { getReservations } from '../redux/slices/reservationSlice';
import ProtectedRoute from '../components/ProtectedRoute';

const MyReservations = () => {
  const dispatch = useDispatch();
  const safaris = useSelector((store) => store.safaris);

  const reservations = useSelector((state) => state.reservations).map(
    (reservation) => ({
      ...reservation,
      safari: safaris.find((safari) => safari.id === reservation.safari_id),
    }),
  );
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(getReservations());
  }, [dispatch]);

  return (
    <ProtectedRoute>
      <main className="page-container">
        <div className="flex flex-col gap-8 h-screen w-full md:w-11/12 mx-auto ">
          <h1 className="header">My Reservations</h1>
          <div className="border-b-4 mb-6 border-dotted border-gray-200 w-32" />
          <div className="flex flex-col gap-8">
            {loading && <p className="text-gray-500 text-2xl">Loading...</p>}
            {reservations.length === 0 ? (
              <p className="">
                You have not booked any safaris. Please make a reservation
                {' '}
                <NavLink className="" to="/app/make-reservation">
                  here
                </NavLink>
                .
              </p>
            ) : (
              <>
                <p className="mb-6">
                  You have curerntly booked the following reservations:
                </p>
                {reservations.map((reservation) => (
                  <MyReservation
                    key={reservation.id}
                    reservation={reservation}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
};

export default MyReservations;

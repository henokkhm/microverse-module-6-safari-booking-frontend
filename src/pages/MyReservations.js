import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegSadTear } from 'react-icons/fa';
import MyReservation from '../components/MyReservation';
import { getReservations } from '../redux/slices/reservationSlice';

const MyReservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(getReservations());
  }, [dispatch]);
  if (reservations[1]) console.log(reservations[1].safari.img);
  return (
    <>
      <div className="flex flex-col justify-center h-screen w-full md:w-11/12 mx-auto ">
        {loading && <span>...loading</span>}
        {reservations.length === 0 ? (
          <div className="flex justify-center font-bold  text-6xl text-clrPrime">
            No Record Found!
            <FaRegSadTear className="spinner" />
          </div>
        ) : (
          reservations.map((reservation) => (
            <MyReservation key={reservation.id} reservation={reservation} />
          ))
        )}
      </div>
    </>
  );
};

export default MyReservations;

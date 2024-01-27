import { FaRegSadTear } from 'react-icons/fa';
import MyReservation from '../components/MyReservation';

const MyReservations = () => {
  const loading = false;
  const reservationList = [
    { id: 1, name: 'any', date: 'date' },
    { id: 1, name: 'any', date: 'date' },
    { id: 1, name: 'any', date: 'date' },
  ];

  return (
    <>
      <div className="flex flex-col justify-center h-screen w-full md:w-11/12 mx-auto ">
        {loading && <span>...loading</span>}
        {reservationList.length === 0 ? (
          <div className="flex justify-center font-bold  text-6xl text-clrPrime">
            No Record Found!
            <FaRegSadTear className="spinner" />
          </div>
        ) : (
          reservationList.map((reservation) => (
            <MyReservation key={reservation.id} id={reservation.id} />
          ))
        )}
      </div>
    </>
  );
};

export default MyReservations;

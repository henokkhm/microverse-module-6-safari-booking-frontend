import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { cancelReservation } from '../redux/slices/reservationSlice';
import Column from './shared/Column';
import defaultImage from '../assets/safari-a.jpg';

const MyReservation = ({ reservation }) => {
  const dispatch = useDispatch();
  const {
    // eslint-disable-next-line camelcase
    bookingDate,
    id,
    numberofPersons,
    totalAmount,
    safari,
  } = reservation;

  const handleCancel = () => {
    dispatch(cancelReservation(id));
  };

  return (
    <div key={id} className="flex items-center justify-center">
      <div className="flex gap-3 flex-col items-center justify-around w-screen bg-white rounded-lg shadow-sm sm:flex-row border-2 border-gray-100">
        <img
          className="w-40 h-30 rounded-l-lg"
          src={safari.img ? `/safaris/${safari.img}` : defaultImage}
          alt="safari"
        />
        <div className="flex-grow md:ml-10 grid grid-cols-4 gap-5">
          {/* eslint-disable-next-line camelcase */}
          <Column label="Safari:" value={safari.name} />
          <Column label="Number Of Persons:" value={numberofPersons} />
          <Column label="Amount:" value={totalAmount} />
          <Column label="Trek Date:" value={bookingDate} />
        </div>
        <button
          onClick={handleCancel}
          type="button"
          className="px-5 py-1 font-semibold bg-transparent duration-300 border border-red-400 rounded text-red-700 hover:bg-red-500 hover:text-white m-7"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

MyReservation.propTypes = {
  reservation: PropTypes.shape({
    bookingDate: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    numberofPersons: PropTypes.string.isRequired,
    safari_id: PropTypes.number.isRequired,
    totalAmount: PropTypes.number.isRequired,
    safari: PropTypes.shape({
      name: PropTypes.string,
      img: PropTypes.string,
    }),
  }).isRequired,
};

export default MyReservation;

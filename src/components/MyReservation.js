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
    bookingDate, id, numberofPersons, totalAmount, safari,
  } = reservation;
  const handleCancel = () => {
    dispatch(cancelReservation(id));
  };
  return (
    <div key={id} className="flex items-center justify-center mt-5 ">
      <div className="flex gap-3 flex-col items-center justify-around w-screen py-2 bg-white rounded-lg shadow-lg sm:flex-row">
        <img className="rounded-full w-20 h-20" src={safari.img ? safari.img : defaultImage} alt="safari" />
        <div className="flex-grow md:ml-10 grid grid-cols-4 gap-5">
          {/* eslint-disable-next-line camelcase */}
          <Column label="Safari:" value={safari.name} />
          <Column label="Number Of Persons:" value={numberofPersons} />
          <Column label="Amount:" value={totalAmount} />
          <Column label="Trek Date:" value={bookingDate} />
        </div>
        <small>
          <button
            onClick={handleCancel}
            type="button"
            className="px-2 py-1 font-semibold bg-transparent border border-red-400 rounded hover:bg-red-500 text-grey-700 hover:text-white m-7 border-blue"
          >
            Cancel
          </button>
        </small>
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

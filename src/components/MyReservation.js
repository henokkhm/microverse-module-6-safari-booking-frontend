import React from 'react';
import PropTypes from 'prop-types';
import Column from './shared/Column';
import defaultImage from '../assets/safari-a.jpg';

const MyReservation = ({ reservation }) => {
  const {
    // eslint-disable-next-line camelcase
    bookingDate, id, numberofPersons, safari_id, totalAmount,
  } = reservation;
  const handleCancel = () => {
    //
    console.log(`Cancelling ${id}`);
  };
  return (
    <div key={id} className="flex items-center justify-center mt-5 ">
      <div className="flex gap-3 flex-col items-center justify-around w-screen py-2 bg-white rounded-lg shadow-lg sm:flex-row">
        <img className="rounded-full w-20 h-20" src={defaultImage} alt="safari" />
        <div className="flex-grow md:ml-10 grid grid-cols-4 gap-5">
          {/* eslint-disable-next-line camelcase */}
          <Column label="Safari:" value={safari_id} />
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
  }).isRequired,
};

export default MyReservation;

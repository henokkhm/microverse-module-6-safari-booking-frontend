import React from 'react';
import PropTypes from 'prop-types';
import Column from './shared/Column';
import defaultImage from '../assets/safari-a.jpg';

const MyReservation = ({ id }) => {
  const handleDelete = () => {
    //
    console.log(`Deleting ${id}`);
  };
  return (
    <div key={id} className="flex items-center justify-center mt-5 ">
      <div className="flex gap-3 flex-col items-center justify-around w-screen py-2 bg-white rounded-lg shadow-lg sm:flex-row">
        <img className="rounded-full w-20 h-20" src={defaultImage} alt="safari" />
        <div className="flex-grow md:ml-10 grid grid-cols-2 gap-5">
          <Column label="Safari:" value="SafariName" />
          <Column label="Trek Date:" value="Date" />
        </div>
        <small>
          <button
            onClick={handleDelete}
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
  id: PropTypes.number.isRequired,
};

export default MyReservation;

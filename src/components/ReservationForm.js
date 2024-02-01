import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import BaseUrl from '../api/api_helper';
import NovaFormInput from './shared/NovaFormInput ';

const ReservationForm = ({ safariId }) => {
  const safaris = useSelector((store) => store.safaris);

  const [selectedSafari, setSelectedSafari] = useState(() => {
    if (safariId) {
      return safaris.find((safari) => safari.id === safariId);
    }
    return null;
  });

  const navigate = useNavigate();
  const userId = localStorage.getItem('user_id');

  const handleSafariSelect = (e) => {
    const selectedSafariId = parseInt(e.target.value, 10);
    const selectedSafari = safaris.find(
      (safari) => safari.id === selectedSafariId,
    );
    setSelectedSafari(selectedSafari);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reservationData = new FormData(e.target);
    reservationData.append('user_id', userId);
    reservationData.append('totalAmount', selectedSafari.price);
    // TODO: add the following required items to formdata
    // :user_id, :safari_id, :bookingDate, :numberofPersons, :totalAmount
    await axios
      .post(`${BaseUrl}reservations`, reservationData)
      .then(() => {
        navigate('app/safaris');
      })
      .catch((err) => {
        document.getElementById('msg').textContent = `${
          err.response ? err.response.data : err.message
        }!`;
      });
    e.target.reset();
  };

  return (
    <form action="submit" onSubmit={handleSubmit} className="form">
      <div>
        <label htmlFor="safari-dropdown">
          <p className="pb-4">Please select the safari you want to book:</p>
          <select
            id="safari-dropdown"
            className="p-4"
            onChange={handleSafariSelect}
          >
            {safaris.map((safari) => (
              <option className="my-2" key={safari.id} value={safari.id}>
                {safari.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label htmlFor="date">
        <p className="pb-4">Please select your desired date:</p>
        <input className="p-4" type="date" id="date" placeholder="Select date" required />
      </label>
      <NovaFormInput
        cType="number"
        cId="numberofPersons"
        cPlaceholder="Enter number of persons"
        isRequired
      />
      {selectedSafari?.price && (
        <div className="flex gap-6 text-2xl mt-6">
          <span className="text-gray-500">
            The price for selected safari is:
          </span>
          <span className="text-st-green-600 font-bold">
            $
            {selectedSafari.price}
          </span>
        </div>
      )}
      <button type="submit" className="btn-primary w-72">
        Make Reservation
      </button>
    </form>
  );
};

ReservationForm.propTypes = {
  safariId: PropTypes.string.isRequired,
};

export default ReservationForm;

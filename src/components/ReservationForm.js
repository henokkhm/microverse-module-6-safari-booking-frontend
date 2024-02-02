import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import BaseUrl from '../api/api_helper';
import NovaFormInput from './shared/NovaFormInput ';

const ReservationForm = ({ safariId }) => {
  const [date, setDate] = useState('');
  const [numberofPersons, setNumberofPersons] = useState(0);

  const safaris = useSelector((store) => store.safaris);

  const [selectedSafari, setSelectedSafari] = useState(() => {
    if (safariId) {
      return safaris.find((safari) => safari.id === safariId);
    }
    return safaris[0];
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
    const reservationData = {
      reservation: {
        user_id: userId,
        safari_id: selectedSafari?.id,
        bookingDate: date,
        numberofPersons,
        totalAmount: selectedSafari.price,
      },
    };
    // TODO: add the following required items to formdata
    // :user_id, :safari_id, :bookingDate, :numberofPersons, :totalAmount
    const token = localStorage.getItem('token');

    await axios
      .post(`${BaseUrl}reservations`, reservationData, {
        headers: { 'Content-Type': 'application/json', Authorization: token },
      })
      .then(() => {
        navigate('/app/safaris');
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
            defaultValue={safariId}
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
        <input
          className="p-4"
          type="date"
          id="date"
          placeholder="Select date"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <NovaFormInput
        cType="number"
        cId="numberofPersons"
        cPlaceholder="Enter number of persons"
        value={date}
        onChange={(e) => setNumberofPersons(parseInt(e.target.value, 10))}
        isRequired
      />
      {selectedSafari?.price && (
        <div className="flex gap-6 text-2xl mt-6">
          <span className="text-gray-500">
            The price for selected safari is:
          </span>
          <span className="text-st-green-600 font-bold">
            <span>$</span>
            {selectedSafari.price}
          </span>
        </div>
      )}
      <button type="submit" className="btn-primary w-72">
        Make Reservation
      </button>
      <div className="error-msg" id="msg" />
    </form>
  );
};

ReservationForm.propTypes = {
  safariId: PropTypes.number,
};

ReservationForm.defaultProps = {
  safariId: 0,
};

export default ReservationForm;

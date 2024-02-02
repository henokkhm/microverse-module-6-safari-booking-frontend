import React, { useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProtectedRoute from '../components/ProtectedRoute';

import { getSafaris } from '../redux/slices/safarisSlice';
import defaultImage from '../assets/safari-a.jpg';

function DeleteSafariPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSafaris());
  }, [dispatch]);

  const safaris = useSelector((store) => store.safaris);

  const deleteSafari = async (safariId) => {
    try {
      await axios.delete(`http://127.0.0.1:3000/safaris/${safariId}`);
      dispatch(getSafaris());
    } catch (error) {
      console.error('Failed to delete safari', error);
    }
  };

  if (safaris.length === 0) {
    <ProtectedRoute>
      <main className="page-container">
        <div className="flex flex-col gap-8 h-screen w-full md:w-11/12 mx-auto ">
          <h1 className="header pt-0">Delete Safari</h1>
          <div className="border-b-4 mb-10 border-dotted border-gray-200 w-32" />
          <p>
            There are currently no safaris. Please add a Safari
            {' '}
            <NavLink className="" to="/app/add-safari">
              here
            </NavLink>
            if you are an admin.
          </p>
        </div>
      </main>
    </ProtectedRoute>;
  }

  return (
    <ProtectedRoute>
      <main className="page-container p-16">
        <div className="flex flex-col gap-6">
          <h1 className="header pt-0">Delete Safari</h1>
          <div className="border-b-4 mb-10 border-dotted border-gray-200 w-32" />
          {safaris.map((safari) => (
            <div
              key={safari.id}
              className="flex gap-6 flex-col items-center w-full max-w-2xl bg-white rounded-lg shadow-sm sm:flex-row border-2 border-gray-100"
            >
              <img
                className="w-40 h-30 rounded-l-lg"
                src={safari.img ? `/safaris/${safari.img}` : defaultImage}
                alt="safari"
              />
              <p className="text-xl text-gray-600 font-bold">{safari.name}</p>
              <button
                onClick={() => deleteSafari(safari.id)}
                type="button"
                className="px-5 py-1 ml-auto font-semibold bg-transparent duration-300 border border-red-400 rounded text-red-700 hover:bg-red-500 hover:text-white m-7"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </main>
    </ProtectedRoute>
  );
}

export default DeleteSafariPage;

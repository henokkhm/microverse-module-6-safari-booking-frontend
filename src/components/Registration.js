import React, { useState } from 'react';

function Registration() {
  const [formData, setFormData] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Registration successful, handle the response accordingly
      } else {
        // Registration failed, handle the error
      }
    } catch (error) {
      // Handle any network or other errors
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h1>Registration Page</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Enter email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Enter email" onChange={handleChange} />
        <input type="text" name="username" placeholder="Enter First name" onChange={handleChange} />
        <input type="text" name="username" placeholder="Enter Last name" onChange={handleChange} />
        <input type="number" name="username" placeholder="Enter Phone Number" onChange={handleChange} />
        <input type="number" name="username" placeholder="Enter role" onChange={handleChange} />
        <button type="submit">Register/Signup</button>
      </form>
    </div>
  );
}

export default Registration;

import React, { useState } from 'react';

function SignUp() {
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

  const divstyle = {
    maxWidth: '450px',
    margin: '2em auto',
    padding: '20px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  };

  const divh2 = {
    color: '#333', /* Darker color for the title to match the navbar */
    fontWeight: 'normal', /* Assuming the Vespa design does not use bold titles */
    textAlign: 'center',
    marginBottom: '20px',
  };

  const forminput = {
    width: 'calc(100% - 20px)', /* Account for padding */
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ddd', /* Lighter border color for input */
    fontSize: '14px', /* Slightly smaller font size for inputs */
  };

  const formbutton = {
    width: 'calc(100% - 20px)', /* Account for padding */
    padding: '10px',
    margin: '15px 0',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#97bf11', /* Assuming a color that matches the Vespa theme */
    color: 'white',
    fontSize: '16px', /* Larger font size for button text */
    cursor: 'pointer',
    transition: 'background-color 0.3s ease', /* Smooth background color transition */
  };

  return (
    <div style={divstyle} className="form-container">
      <h2 style={divh2}>
        Registration Page
      </h2>
      <form onSubmit={handleSubmit}>
        <input style={forminput} className="form-input" type="email" name="email" placeholder="Enter email" onChange={handleChange} />
        <input style={forminput} className="form-input" type="password" name="password" placeholder="Enter password" onChange={handleChange} />
        <input style={forminput} className="form-input" type="text" name="username" placeholder="Enter First name" onChange={handleChange} />
        <input style={forminput} className="form-input" type="text" name="username" placeholder="Enter Last name" onChange={handleChange} />
        <input style={forminput} className="form-input" type="number" name="username" placeholder="Enter Phone Number" onChange={handleChange} />
        <input style={forminput} className="form-input" type="number" name="username" placeholder="Enter role" onChange={handleChange} />
        <button style={formbutton} className="form-button" type="submit">Register/Signup</button>
      </form>
    </div>
  );
}

export default SignUp;

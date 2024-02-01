import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BaseUrl from '../api/api_helper';

function Registration() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const registrationData = new FormData(event.target);
    await axios.post(`${BaseUrl}api/auth/signup`, registrationData).then((response) => {
      navigate('/signin');
      console.log(response);
    }).catch((err) => {
      console.log(err);
    });
    event.target.reset();
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
        <input style={forminput} className="form-input" type="email" name="user[email]" placeholder="Enter email" />
        <input style={forminput} className="form-input" type="password" name="user[password]" placeholder="Enter password" />
        <input style={forminput} className="form-input" type="text" name="user[first_name]" placeholder="Enter First name" />
        <input style={forminput} className="form-input" type="text" name="user[last_name]" placeholder="Enter Last name" />
        <input style={forminput} className="form-input" type="number" name="user[phone_no]" placeholder="Enter Phone Number" />
        <select style={forminput} className="form-input" name="user[role]" id="roleSelect">
          <option value="admin">admin</option>
          <option value="user">user</option>
        </select>
        <input style={forminput} className="form-input" type="text" name="user[username]" placeholder="Enter Username" />
        <button style={formbutton} className="form-button" type="submit">Register/Signup</button>
      </form>
    </div>
  );
}

export default Registration;

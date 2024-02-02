import { Link } from 'react-router-dom';

import RegistrationForm from '../components/RegistrationForm';
import splashScreenImg from '../assets/logo.png';

function Registration() {
  return (
    <main className="page-container items-center justify-center">
      <div className="flex flex-col bg-st-green-50 gap-8 w-full bg-cover p-12 sm:w-[560px]">
        <img className="h-80" src={splashScreenImg} alt="safari trek logo" />
        <h2 className="header">Create a user account</h2>
        <RegistrationForm />
        <div className="flex gap-3 justify-center">
          Already have an account?
          <Link to="/" className="link-cus-title">
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Registration;

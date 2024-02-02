import { Link } from 'react-router-dom';

import LoginForm from '../components/LoginForm';
import splashScreenImg from '../assets/logo.png';

function Login() {
  return (
    <main className="page-container items-center justify-center">
      <div className="flex flex-col bg-st-green-50 gap-8 w-full bg-cover p-12 sm:w-[560px]">
        <img className="h-80" src={splashScreenImg} alt="safari trek logo" />
        <h2 className="header">Please sign in to your account</h2>
        <LoginForm />
        <div className="flex gap-3 justify-center">
          Don&apos;t have an account?
          <Link to="signup" className="link-cus-title">
            Sign up
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Login;

import LoginForm from '../components/LoginForm';
import splashScreenImg from '../assets/logo.png';

function Login() {
  return (
    <main className="page-container">
      <div className="flex flex-col bg-st-green-50 gap-8 w-full bg-cover p-12 sm:w-[560px]">
        <img className="h-80" src={splashScreenImg} alt="safari trek logo" />
        <h2 className="text-3xl text-left font-bold pt-16">Please sign in to your account</h2>
        <LoginForm />
        <div className="link-cus flex gap-3 justify-center">
          Don&apos;t have an account?
          <a href="/register" className="link-cus-title">
            Sign up
          </a>
        </div>
      </div>
    </main>
  );
}

export default Login;

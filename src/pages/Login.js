import LoginForm from '../components/LoginForm';

function Login() {
  return (
    <div className="flex flex-col bg-[url('./assets/safari-a.jpg')] w-full bg-cover shadow-md items-center justify-center border-solid border p-4 sm:w-[600px]">
      <p className="text-md text-red-600 text-center mb-3" id="msg" />
      <h2>Sign in to your Safari account</h2>
      <LoginForm />
      <div className="link-cus">
        Don&apos;t have an account?
        <a href="/#" className="link-cus-title">
          Sign up
        </a>
      </div>
    </div>
  );
}

export default Login;

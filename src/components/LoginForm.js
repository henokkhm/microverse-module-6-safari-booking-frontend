import NovaFormInput from './shared/NovaFormInput ';

const LoginForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = new FormData(e.target);
    console.log(JSON.stringify(loginData));
    e.target.reset();
  };
  return (
    <form
      action="submit"
      onSubmit={handleSubmit}
      className="grid pt-4 pb-1 items-center space-y-6 w-full"
    >
      <NovaFormInput
        cId="user[name]"
        cMinLen="2"
        cPlaceholder="Enter your name"
        isRequired
      />
      <NovaFormInput
        cType="password"
        cId="user[password]"
        cMinLen="6"
        cPlaceholder="Enter your Password"
        isRequired
      />
      <button
        type="submit"
        className="opacity-90 w-full py-2 tracking-wide text-white transition-colors duration-200 transform bg-lime-400 rounded-md hover:bg-lime-300 focus:outline-lime-500 hover:font-extrabold"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;

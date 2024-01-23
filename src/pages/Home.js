import useLoginStatus from '../hooks/authHelper';

function Home() {
  const isLoggedIn = useLoginStatus();
  return (
    <>
      <div>Homepage</div>
      {isLoggedIn ? (
        <div>You are Logged In</div>
      ) : (
        <div>You Are Not Logged In</div>
      )}
    </>
  );
}

export default Home;

import RegistrationForm from '../components/RegistrationForm';

function RegisterAdmin() {
  return (
    <main className="page-container p-16">
      <div className="flex flex-col gap-8 w-full">
        <h2 className="header mt-0 pt-0">Create a new admin user account</h2>
        <p className="max-w-[720px]">
          Please use the following form to create a new administrator user. Note
          that this user will be able to create and delete safaris. Further, the
          new user can create another admin user that will have the same
          priviledges.
        </p>
        <RegistrationForm isAdmin />
      </div>
    </main>
  );
}

export default RegisterAdmin;

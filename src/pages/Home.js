import ProtectedRoute from '../components/ProtectedRoute';
import SafarisList from '../components/SafarisList';

function Home() {
  return (
    <ProtectedRoute>
      <main className="min-h-screen">
        <div className="mx-auto text-center px-4 pt-20">
          <h1 className="text-5xl uppercase font-bold pb-4">Our Safaris</h1>
          <p className="pb-8 text-gray-400 text-xl">
            Checkout our latest offerings for an adventure of a lifetime
          </p>
        </div>
        <div className="border-b-4 mb-10 mx-auto border-dotted border-gray-200 w-32" />
        <SafarisList />
      </main>
    </ProtectedRoute>
  );
}

export default Home;

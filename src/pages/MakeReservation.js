import { useParams } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';
import ReservationForm from '../components/ReservationForm';

function Reserve() {
  const { id: safariId } = useParams();
  return (
    <ProtectedRoute>
      <main className="page-container p-16 gap-8">
        <h1 className="header pt-0 text-4xl">Make a Reservation</h1>
        <div className="border-b-4 mb-10 border-dotted border-gray-200 w-32" />
        <ReservationForm safariId={safariId} />
      </main>
    </ProtectedRoute>
  );
}

export default Reserve;

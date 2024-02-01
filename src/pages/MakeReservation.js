import { useParams } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';
import ReservationForm from '../components/ReservationForm';

function Reserve() {
  const { id: safariId } = useParams();
  return (
    <ProtectedRoute>
      <main className="page-container p-16 gap-8">
        <h1 className="header">Make a Reservation</h1>
        <ReservationForm safariId={safariId} />
      </main>
    </ProtectedRoute>
  );
}

export default Reserve;

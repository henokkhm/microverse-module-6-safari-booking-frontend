import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import ProtectedRoute from '../components/ProtectedRoute';
import { getSafaris } from '../redux/slices/safarisSlice';

function SafariDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSafaris());
  }, [dispatch]);

  const safaris = useSelector((store) => store.safaris);
  const safariData = safaris.find((safari) => safari.id === parseInt(id, 10));

  if (!safariData) {
    return (
      <main className="page-container">
        <h2 className="header">Safari details not found!</h2>
      </main>
    );
  }

  const start = safariData.description.indexOf('\n\n');
  const details = safariData.description.slice(start + 1);

  return (
    <ProtectedRoute>
      <main className="page-container gap-0">
        <div className="h-80 overflow-hidden  backdrop-blur-xl hover:scale-125 duration-[10s]">
          <img
            className="w-full -translate-y-80 relative z-[-10]"
            src={`/safaris/${safariData.img}`}
            alt={`${safariData.name} cover`}
          />
        </div>
        <div className="px-16 flex flex-col gap-8">
          <h1 className="header text-4xl">{safariData.name}</h1>
          <div className="border-b-4 border-dotted border-gray-200 w-32" />

          <div>
            <div className="flex gap-6 text-2xl mt-6">
              <span className="text-gray-500">Location</span>
              <span className="text-st-green-600 font-bold">
                {safariData.location}
              </span>
            </div>

            <div className="flex gap-6 text-2xl mt-6">
              <span className="text-gray-500">Price</span>
              <span className="text-st-green-600 font-bold">
                $
                {safariData.price}
              </span>
            </div>
          </div>

          <p className="parag max-w-[720px]" style={{ whiteSpace: 'pre-line' }}>
            {details}
          </p>
          <Link
            to={`/app/reserve/${id}`}
            className="btn-primary w-32 text-center"
          >
            Reserve
          </Link>
        </div>
      </main>
    </ProtectedRoute>
  );
}

export default SafariDetailsPage;

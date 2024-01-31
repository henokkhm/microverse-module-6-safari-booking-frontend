// import SafariCard from '../components/SafariCard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSafaris } from '../redux/slices/safarisSlice';
import SafariCard from '../components/SafariCard';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSafaris());
  }, [dispatch]);

  const safaris = useSelector((store) => store.safaris);

  return (
    <main>
      <div className="mx-auto text-center px-4 pt-20">
        <h1 className="text-5xl uppercase font-bold pb-4">Our Safaris</h1>
        <p className="pb-8 text-gray-400 text-xl">Checkout our latest offerings for an adventure of a lifetime</p>
      </div>
      <div className="border-b-4 mb-10 mx-auto border-dotted border-gray-200 w-32" />
      <div className="flex flex-col items-center">
        {safaris.map((safari) => (
          <SafariCard
            key={safari.id}
            name={safari.name}
            coverImageURL={safari.img}
            description={safari.description}
          />
        ))}
      </div>
    </main>
  );
}

export default Home;

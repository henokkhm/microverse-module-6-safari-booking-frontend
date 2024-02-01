import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import SafariCard from '../components/SafariCard';
import { NextArrow, PrevArrow } from '../components/SliderButtons';
import { getSafaris } from '../redux/slices/safarisSlice';
import ProtectedRoute from '../components/ProtectedRoute';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSafaris());
  }, [dispatch]);

  const safaris = useSelector((store) => store.safaris);

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
        <Slider
          slidesToScroll={1}
          slidesToShow={3}
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
          gap={10}
        >
          {safaris.map((safari) => (
            <Link to={`/app/safari/${safari.id}`} key={safari.id}>
              <SafariCard
                name={safari.name}
                coverImageURL={safari.img}
                description={safari.description}
              />
            </Link>
          ))}
        </Slider>
      </main>
    </ProtectedRoute>
  );
}

export default Home;

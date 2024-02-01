import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';

import SafariCard from './SafariCard';
import { NextArrow, PrevArrow } from './SliderButtons';
import { getSafaris } from '../redux/slices/safarisSlice';
import useWindowSize from '../hooks/useWindowSize';

function SafarisList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSafaris());
  }, [dispatch]);

  const safaris = useSelector((store) => store.safaris);
  const { windowWidth } = useWindowSize();

  if (safaris.length === 0) {
    return (
      <h2 className="form-header">
        There are no Safaris listed yet. Please add Safaris if you are an admin
      </h2>
    );
  }

  const safarisArr = safaris.map((safari) => (
    <Link to={`/app/safari/${safari.id}`} key={safari.id}>
      <SafariCard
        name={safari.name}
        coverImageURL={safari.img}
        description={safari.description}
      />
    </Link>
  ));

  const gridClasses = `grid gap-4 ${windowWidth < 900 ? 'grid-cols-1' : 'grid-cols-2'}`;

  if (windowWidth < 1200) {
    return <div className={gridClasses}>{safarisArr}</div>;
  }

  return (
    <div>
      <Slider
        slidesToScroll={1}
        slidesToShow={3}
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
        gap={10}
      >
        {safarisArr}
      </Slider>
    </div>
  );
}

export default SafarisList;

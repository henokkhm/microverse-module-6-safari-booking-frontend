import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';

import SafariCard from './SafariCard';
import { NextArrow, PrevArrow } from './SliderArrows';
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
      <h2 className="header">
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

  if (windowWidth < 1160) {
    return <div className="flex flex-col gap-4 items-center">{safarisArr}</div>;
  }

  let slidesToShow = 2;
  if (windowWidth > 1500) {
    slidesToShow = 3;
  }

  return (
    <div>
      <Slider
        slidesToScroll={1}
        slidesToShow={slidesToShow}
        nextArrow={<NextArrow onClick={() => {}} />}
        prevArrow={<PrevArrow onClick={() => {}} />}
        gap={10}
      >
        {safarisArr}
      </Slider>
    </div>
  );
}

export default SafarisList;

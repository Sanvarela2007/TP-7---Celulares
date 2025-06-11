import { useState, useEffect } from 'react';
import './Carousel.css';

const imagenes = [
  'https://placehold.co/800x300?text=Promo+1',
  'https://placehold.co/800x300?text=Promo+2',
  'https://placehold.co/800x300?text=Promo+3'
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="carousel">
      <img src={imagenes[index]} alt={`slide ${index}`} className="carousel-img" />
    </div>
  );
};

export default Carousel;

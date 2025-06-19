import React, { useState, useEffect } from 'react';
import './Carousel.css';

const imagenes = [
  'https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-silver-220907-geo_inline.jpg.large.jpg',
  'https://www.ubuy.com.ar/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFab0RUN2Eyd0wuX0FDX1NMMTUwMF8uanBn.jpg',
  'https://i02.appmifile.com/492_operatorx_operatorx_opx/02/03/2025/5667c36c15d47b90d0faa7ac23c9f276.png?thumb=1&w=400&q=85'
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagenes.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel">
      <img
        src={imagenes[index]}
        alt={`Slide ${index + 1}`}
        className="carousel-image"
        key={index}
      />
    </div>
  );
};

export default Carousel;

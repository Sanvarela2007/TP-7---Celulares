import { useEffect, useState } from 'react';
import CelularCard from '../CardCelular/CardCelular';
import Carousel from '../Carousel/Carousel';
import { celulares } from '../../data';
import './Home.css';

const Home = () => {
  const [randomCelulares, setRandomCelulares] = useState([]);

//(Tambien buscamos esto en Internet, para que cada vez que se cargue la pagina, se muestren 6 celulares al azar)
  useEffect(() => {
    const shuffled = [...celulares].sort(() => 0.5 - Math.random());
    setRandomCelulares(shuffled.slice(0, 6));
  }, []);

  return (
    <main className="home-container">
      <Carousel />
      <h2 className="home-title">
        Bienvenido a nuestra tienda
      </h2>
      <section className="celulares-grid">
        {randomCelulares.map(cel => (
          <CelularCard key={cel.id} celular={cel} />
        ))}
      </section>
    </main>
  );
};

export default Home;

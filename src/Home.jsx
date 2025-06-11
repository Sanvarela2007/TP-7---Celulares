import Carousel from '../components/Carousel';
import { celulares } from '../data/data';
import CelularCard from '../components/CelularCard';

const Home = () => {
  const randomCelulares = [...celulares].sort(() => 0.5 - Math.random()).slice(0, 6);

  return (
    <div>
      <Carousel />
      <h2>Bienvenido a nuestra tienda</h2>
      <div className="grid">
        {randomCelulares.map(c => <CelularCard key={c.id} celular={c} />)}
      </div>
    </div>
  );
};

export default Home;

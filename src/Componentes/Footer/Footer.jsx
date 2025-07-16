import './footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content horizontal">
      <span className="footer-logo">Tienda de Celulares</span>
      <span>© {new Date().getFullYear()} Todos los derechos reservados.</span>
      <span>Contacto: tiendacelus@gmail.com</span>
      <span>Dirección: Yatay 240, Buenos Aires</span>
    </div>
  </footer>
);

export default Footer;
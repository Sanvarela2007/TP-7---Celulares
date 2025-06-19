import React from "react";
import './Contacto.css';

const Contacto = () => {
  return (
    <div className="contact-container">
      <h1>Contacto</h1>
      <p>¿Tenés alguna duda sobre nuestros celulares? Escribinos:</p>
      <form className="contact-form">
        <div>
          <label>Nombre</label>
          <input type="text" placeholder="Tu nombre" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" placeholder="tucorreo@email.com" />
        </div>
        <div>
          <label>Mensaje</label>
          <textarea rows="4" placeholder="Escribí tu mensaje"></textarea>
        </div>
        <button type="button">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;

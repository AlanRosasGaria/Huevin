import React from 'react';
import people from '../assets/people.png';
import ai from '../assets/ai.png';
import '../css/containers/header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">LenguageTecnology</h1>
      <p>Es una plataforma de aprendizaje para las tecnologías Web y el software con el que funciona la Web Proporcionar a los desarrolladores la información que necesitan para construir fácilmente proyectos en la Web abierta. Si se trata de una tecnología expuesta en la Web Abierta, queremos documentarla. ¡Somos una comunidad global! Contamos con colaboradores increíbles de todo el mundo, en múltiples idiomas.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>Más de 500 personas consultan nuestra documentación las 24/h</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;

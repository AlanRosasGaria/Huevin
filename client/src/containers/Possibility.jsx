import React from 'react';
import possibilityImage from '../assets/possibility.png';
import '../css/containers/possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>HyperText Markup Language</h4>
      <h1 className="gradient__text">HTML: Lenguaje de etiquetas de hipertexto</h1>
      <p> Define el significado y la estructura del contenido web. Además de HTML, generalmente se utilizan otras tecnologías para describir la apariencia/presentación de una página web </p>
      <h4>Hipertexto hace referencia a los enlaces que conectan páginas web</h4>
    </div>
  </div>
);

export default Possibility;

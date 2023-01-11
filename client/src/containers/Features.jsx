import React from 'react';
import Feature from '../components/Feature';
import '../css/containers/features.css';

const featuresData = [
  {
    title: 'Introducción a CSS',
    text: 'Si eres nuevo en el desarrollo web, asegúrate de leer nuestro artículo de conceptos básicos de CSS para saber qué es CSS y cómo usarlo.',
  },
  {
    title: 'Tutoriales CSS',
    text: 'Nuestra área de aprendizaje de CSS contiene una gran cantidad de tutoriales que te llevan desde el nivel de principiante hasta el nivel de competencia, cubriendo todos los aspectos fundamentales.',
  },
  {
    title: 'Referencia CSS',
    text: 'Nuestra exhaustiva referencia de CSS para desarrolladores web experimentados describe cada propiedad y concepto de CSS.',
  },
  {
    title: 'Diseño de CSS',
    text: 'En este punto ya hemos analizado los fundamentos de CSS, cómo dar estilo al texto y cómo diseñar y manipular las cajas en las que se encuentra el contenido',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Hojas de Estilo en Cascada (del inglés Cascading Style Sheets) o CSS </h1>
      <p>Es el lenguaje de estilos </p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;

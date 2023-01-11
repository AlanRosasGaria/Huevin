import React from 'react';
import Feature from '../components/Feature';
import '../css/containers/whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="LenguageTecnology" text="JavaScript (JS) es un lenguaje de programación ligero. Si bien es más conocido como un lenguaje de scripting para páginas web, y es usado en muchos entornos fuera del navegador, tal como Node.js, es un lenguaje de programación basada en prototipos, multiparadigma, de un solo hilo, dinámico, con soporte para programación orientada a objetos, imperativa y declarativa (por ejemplo programación funcional)" />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Desarrollo web Front-end</h1>
      <p>Tutoriales</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Inicio" text="Responde algunas preguntas fundamentales tales como ¿qué es JavaScript?,¿cómo se ve?, y ¿qué puede hacer?," />
      <Feature title="Bloques" text="Continúa nuestra cobertura de las características fundamentales clave de JavaScript" />
      <Feature title="POO" text="Es importante comprender la naturaleza de la orientación a objetos en JavaScript " />
    </div>
  </div>
);

export default WhatGPT3;

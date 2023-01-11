import React from 'react';
import gpt3Logo from '../assets/ai.png';
import '../css/containers/footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">¿Quieres dar un paso hacia el futuro antes que los demás?</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Solicitar acceso anticipado</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Contactanos</h4>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Twitter</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Información adicional</h4>
        <p>Sobre nosotros </p>
        <p>Consultas</p>
      </div>
      
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 GPT-3. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;

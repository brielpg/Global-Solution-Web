import React from 'react';
import './conteudo.css';

const Conteudo: React.FC = () => {
  return (
    <div className="container">
      <h1 className="title">Lorem Ipsum</h1>
      <div className="content">
        <img
          src="/path/to/your/image.jpg"
          alt="Imagem de lixos no mar"
          className="image"
        />
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          vestibulum, urna vel tincidunt tincidunt, justo nisl bibendum
          libero, nec volutpat justo purus id nunc.
        </p>
      </div>
    </div>
  );
};

export default Conteudo;
import React from 'react';
import imagem from '../../../../../imagens/lixo-oceanos-video-nasa-platico-meio-ambiente-mundo-certo.jpg';
import Image from 'next/image';
import './conteudo.css';

const Conteudo2: React.FC = () => {
  return (
    <div className="conteudo">
      <div className="container anim2">
        <h1 className="title2">Como funciona</h1>
        <div className="content2">
          <p className="text2">Nosso projeto não só facilita a identificação e a limpeza de áreas poluídas, mas também visa educar e conscientizar as pessoas sobre a importância vital de manter nossos oceanos saudáveis e livres de poluição. Através do Clear Ocean, aspiramos criar uma comunidade global de defensores dos oceanos que trabalham juntos para restaurar a saúde marinha, permitindo que nossos oceanos voltem a respirar. Este projeto representa um passo significativo na luta contra a poluição marinha e na promoção de um futuro sustentável para todos.</p>
          <Image src={imagem} alt="Imagem de lixos no mar" className='image2'/>
        </div>
      </div>
    </div>
  );
};

export default Conteudo2;
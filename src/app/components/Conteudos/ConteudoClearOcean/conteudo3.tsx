import React from 'react';
import imagem from '../../../../../imagens/UNUSUAL-The-Colour-Of-The-Ocean-Will-Change-In-Eighty-Years-Due-To-Climate-Change.jpg';
import Image from 'next/image';
import './conteudo.css';

const Conteudo3: React.FC = () => {
  return (
    <div className="conteudo">
      <div className="container anim1">
        <h1 className="title">Importância do Oceano</h1>
        <div className="content3">
          <Image src={imagem} alt="Imagem do mar" className='image'/>
          <p className="text">Os oceanos são vitais para a saúde do nosso planeta, cobrindo mais de 70% da Terra e ajudando a regular o clima. Além disso, produzem mais da metade do oxigênio que respiramos, graças às pequenas plantas e algas marinhas. Os oceanos também são o lar de uma incrível variedade de vida, oferecendo abrigo para milhões de espécies e sustento para bilhões de pessoas. Proteger os oceanos é essencial para manter o equilíbrio da natureza e garantir a sobrevivência de muitas formas de vida.</p>
        </div>
      </div>
    </div>
  );
};

export default Conteudo3;
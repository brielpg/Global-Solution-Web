import React from 'react';
import imagem from '../../../../../imagens/golfinhos-como-vivem-do-que-se-alimentam-e-principais-habitos-1024x683.jpg';
import Image from 'next/image';
import './conteudo.css';

const Conteudo1: React.FC = () => {
  return (
    <div className="conteudo">
      <div className="container anim1">
        <h1 className="title">Clear Ocean</h1>
        <div className="content1">
          <Image src={imagem} alt="Imagem de golfinhos pulando no mar" className='image'/>
          <p className="text">O Clear Ocean é uma iniciativa da Blue Ocean dedicada à preservação dos nossos preciosos oceanos. Este projeto permite que cidadãos comprometidos e preocupados com o meio ambiente denunciem áreas com acúmulo de lixo marinho de maneira detalhada, utilizando coordenadas geográficas, comentários e localizações específicas.</p>
        </div>
      </div>
    </div>
  );
};

export default Conteudo1;
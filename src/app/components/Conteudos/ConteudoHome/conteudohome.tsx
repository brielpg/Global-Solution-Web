import React from 'react';
import './conteudohome.css';

const ConteudoHome: React.FC = () => {
  return (
    <div className="conteudo-home">
        <div className="conteudos-cards">
                <div className='conteudo-box cor-fundo1'>
                    <h1>Nossa ambição</h1>
                    <p>é tornar a vida sustentável parte do cotidiano de todos. Juntos, podemos criar um mundo melhor. Comece a agir e nos ajude a cumprir essa missão.</p>
                </div>

                <div className='imagem-home' id='imagem1'></div>
        </div>

        <div className="conteudos-cards">
                <div className='imagem-home' id='imagem2'></div>

                <div className='conteudo-box cor-fundo2'>
                    <h1>Senso de Propósito</h1>
                    <p>Nossos negócios sempre foram guiados por um forte propósito ambiental, um elo que nos conecta com a vida e a natureza. A nossas origem tem como missão melhorar a saúde, o meio ambiente, a qualidade de vida no planeta. Continuamos a perseguir metas ambiciosas, como reduzir cada vez mais o impacto negativo que o humano traz ao meio ambiente.</p>
                </div>
        </div>

        <div className="conteudos-cards">
                <div className='conteudo-box cor-fundo1'>
                    <h1>Nossa visão</h1>
                    <p>Nossa visão é expandir o impacto social ambiental, e mostrar a todos que a tecnologia pode e deve ser usada para melhorarmos a vida.</p>
                </div>
                
                <div className='imagem-home' id='imagem3'></div>
        </div>

        <div className="conteudos-cards">
                <div className='imagem-home' id='imagem4'></div>

                <div className='conteudo-box cor-fundo2'>
                    <h1>Vamos Juntos</h1>
                    <p>Liderando a próxima era da sustentabilidade corporativa e tecnológica, estamos evoluindo nossa abordagem para oferecer um desempenho empresarial consistente e competitivo, ao mesmo tempo em que transformamos nosso negócio para alcançar nossos objetivos ambiciosos.</p>
                </div>
        </div>
    </div>
  );
};

export default ConteudoHome;
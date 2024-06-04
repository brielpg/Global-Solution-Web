import Conteudo1 from '@/app/components/Conteudos/ConteudoClearOcean/conteudo1';
import Conteudo2 from '@/app/components/Conteudos/ConteudoClearOcean/conteudo2';
import Conteudo3 from '@/app/components/Conteudos/ConteudoClearOcean/conteudo3';
import Footer from '@/app/components/Footer/footer';
import Header from '@/app/components/HeaderClearOcean/header';
import Navbar from '@/app/components/Navbar/navbar';
import React from 'react';
import "./clearocean.css";
import Link from 'next/link';

const ClearOcean: React.FC = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div id='conteudo-clearocean'>
          <Conteudo1/>
          <Conteudo2/>
          <Conteudo3/>
          <div className="div-denunciar">
            <Link href="/denunciar" className='botao-denunciar'><p>Clique aqui para denunciar lixo</p></Link></div>
        </div>
        <Footer/>
    </div>
  );
};

export default ClearOcean;
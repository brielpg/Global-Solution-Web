import React from 'react';
import Footer from '@/app/components/Footer/footer';
import Navbar from '@/app/components/Navbar/navbar';
import "./home.css";
import HeaderHome from '@/app/components/HeaderHome/headerhome';
import ConteudoHome from '@/app/components/Conteudos/ConteudoHome/conteudohome';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className='bg-home'>
        <Navbar/>
        <HeaderHome/>
        <p>Fundada há 1 ano, somos uma empresa tecnológica focada no meio ambiente. Somos conhecidos por cuidar dos oceanos com destreza, principalmente no que tange a diminuição do lixo marinho. Temos convicção de que cuidar do meio ambiente é cuidar da vida</p>
        <ConteudoHome/>
        <div className="div-btn-htoco"><Link href="/clearocean" className='btn-home-to-clearocean'><p>Clique aqui para conhecer o Projeto Clear Ocean</p></Link></div>
        <Footer/>
    </div>
  );
};

export default Home;
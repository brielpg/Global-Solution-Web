import Conteudo from '@/app/components/Conteudo/conteudo';
import Footer from '@/app/components/Footer/footer';
import Header from '@/app/components/Header/header';
import Navbar from '@/app/components/Navbar/navbar';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Conteudo/>
        <Footer/>
    </div>
  );
};

export default Home;
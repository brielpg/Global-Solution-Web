import React from 'react';
import Footer from '@/app/components/Footer/footer';
import Navbar from '@/app/components/Navbar/navbar';
import "./denunciar.css";

const Home: React.FC = () => {
  return (
    <div className='bg-denunciar'>
        <Navbar/>
        <Footer/>
    </div>
  );
};

export default Home;
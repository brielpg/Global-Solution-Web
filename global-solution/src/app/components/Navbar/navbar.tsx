import React from 'react';
import Link from 'next/link';
import "./navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="logo">Blue World</div>
      <ul className="menu">
        <Link href="/home" className='links'><li>Home</li></Link>
        <Link href="/clearocean" className='links'><li>Clear Ocean</li></Link>
        <Link href="/denunciar" className='links'><li>Denunciar</li></Link>
        <Link href="/login" className='links'><li>Login</li></Link>
        <Link href="/cadastro" className='links'><li>Cadastro</li></Link>
      </ul>
    </nav>
  );
};

export default Navbar;
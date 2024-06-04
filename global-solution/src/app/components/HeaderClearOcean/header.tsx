import React from 'react';
import "./header.css";

const Header: React.FC = () => {
  return (
    <header className='headerCO'>
      <div className="content-box">
        <h1>Projeto Clear Ocean</h1>
        <p>Preservando nossos oceanos, com um clique de cada vez</p>
      </div>
    </header>
  );
};

export default Header;
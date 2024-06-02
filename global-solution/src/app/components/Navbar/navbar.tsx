import React from 'react';
import "./navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="logo">Blue World</div>
      <ul className="menu">
        <li>Home</li>
        <li>Quiz</li>
        <li>Login</li>
        <li>Cadastro</li>
      </ul>
    </nav>
  );
};

export default Navbar;
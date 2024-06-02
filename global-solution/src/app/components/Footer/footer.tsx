import React from 'react';
import "./footer.css"

const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; Blue World 2024</p>
      <div className="social">
        <p>Conheça nossas redes</p>
        {/* Adicionar icones das redes sociais */}
      </div>
    </footer>
  );
};

export default Footer;
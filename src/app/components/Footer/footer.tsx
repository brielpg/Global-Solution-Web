import React from 'react';
import "./footer.css"

const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; Blue World 2024</p>
      <div className="integrantes">
        <p><strong>1TDSPA</strong></p>
        <p>Gabriel Pescarolli Galiza - RM554012</p>
        <p>Gabriel Fossatti Beltran- RM552798</p>
        <p>Carlos Eduardo Ariza Sartorio - RM553461</p>
      </div>
    </footer>
  );
};

export default Footer;
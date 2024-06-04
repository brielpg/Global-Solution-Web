import Footer from '@/app/components/Footer/footer';
import Navbar from '@/app/components/Navbar/navbar';
import React from 'react';
import "./cadastro.css";

const Cadastro: React.FC = () => {
  return (
    <div className='bg-cadastro'>
        <Navbar/>
        <div className="cadastro-body">
            <div className="cadastro-container">
                <h1>CADASTRO</h1>
                <div className='cadastro-form-container'>
                    <div className="two-inputs">
                        <input type="text" placeholder="Nome" required />
                        <input type="text" placeholder="Sobrenome" required />
                    </div>
                    
                    <div className="two-inputs">
                        <input type="text" placeholder="CPF" required />
                        <input type="email" placeholder="Email" required />
                    </div>
                                
                    <div className="two-inputs">
                      <input type="text" placeholder="Telefone" required />
                      <input type="text" placeholder="País" required />
                    </div>

                    <input type="password" placeholder="Senha" required/>
                    <button type="submit">ENVIAR</button>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  );
};

export default Cadastro;
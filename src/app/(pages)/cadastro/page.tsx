"use client";

import Footer from '@/app/components/Footer/footer';
import Navbar from '@/app/components/Navbar/navbar';
import React from 'react';
import { useState } from 'react'
import axios from 'axios'
import "./cadastro.css";

const Cadastro: React.FC = () => {
  const [nome, setNome] = useState("")
  const [sobrenome, setSobrenome] = useState("")
  const [cpf, setCpf] = useState("")
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")
  const [pais, setPais] = useState("")
  const [senha, setSenha] = useState("")
  
  const req = async ()=> {
  try{
    const response = await axios({
      method: "post",
      url: "http://localhost:8080/globalsolution",
      headers: {"Content-Type": "application/json"},
      data: {
        "nome": nome,
        "sobrenome" : sobrenome,        
        "cpf" : cpf,
        "email" : email,
        "telefone" : telefone,
        "pais" : pais,
        "senha" : senha
      }
    })
    console.log(response);
  }catch(err){
    console.log(err)
    
  }
}

  return (
    <div className='bg-cadastro'>
        <Navbar/>
        <div className="cadastro-body">
            <div className="cadastro-container">
                <h1>CADASTRO</h1>
                <div className='cadastro-form-container'>
                    <div className="two-inputs">
                        <input onChange={(e) => setNome(e.target.value)} type="text" name="nome" placeholder="Nome" required />
                        <input onChange={(e) => setSobrenome(e.target.value)} type="text" name="sobrenome" placeholder="Sobrenome" required />
                    </div>
                    
                    <div className="two-inputs">
                        <input onChange={(e) => setCpf(e.target.value)} type="text" name="cpf" placeholder="CPF" required />
                        <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email" required />
                    </div>
                                
                    <div className="two-inputs">
                      <input onChange={(e) => setTelefone(e.target.value)} type="text" name="telefone" placeholder="Telefone" required />
                      <input onChange={(e) => setPais(e.target.value)} type="text" name="pais" placeholder="País" required />
                    </div>

                    <input onChange={(e) => setSenha(e.target.value)} type="password" name="senha" placeholder="Senha" required/>
                    <button onClick={req} type="submit">ENVIAR</button>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  );
};

export default Cadastro;
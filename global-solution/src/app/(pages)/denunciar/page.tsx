"use client";

import React from 'react';
import Footer from '@/app/components/Footer/footer';
import Navbar from '@/app/components/Navbar/navbar';
import { useState } from 'react'
import axios from 'axios'
import "./denunciar.css";

const Home: React.FC = () => {
  const [denuncia, setDenuncia] = useState("")
  const [cidade, setCidade] = useState("")
  const [descricao, setDescricao] = useState("")
  const [comentario, setComentario] = useState("")
  const [coordenada, setCoordenada] = useState("")
  
  const req = async ()=> {
  try{
    const response = await axios({
      method: "post",
      url: "http://localhost:8080/denunciar",
      headers: {"Content-Type": "application/json"},
      data: {
        "denuncia": denuncia,
        "cidade" : cidade,        
        "descricao_local" : descricao,
        "comentario" : comentario,
        "coordenadas" : coordenada
      }
    })
    console.log(response);
  }catch(err){
    console.log(err)
    
  }
}

  return (
    <div className='bg-denunciar'>
        <Navbar/>
        <div className="denuncia-body">
            <div className="denuncia-container">
                <h1>DENÚNCIA</h1>
                <div className='denuncia-form-container'>
                    <div className="input-denuncia">
                      <label>Título da denúncia *</label>
                      <input onChange={(e) => setDenuncia(e.target.value)} type="text" name="denuncia"required />
                    </div>

                    <div className="two-inputsD">
                      <div className="input-denuncia">
                        <label>Cidade próxima *</label>
                        <input onChange={(e) => setCidade(e.target.value)} type="text" name="cidade" required />
                      </div>
                      <div className="input-denuncia">
                        <label>Coordenadas *</label>
                        <input onChange={(e) => setCoordenada(e.target.value)} type="text" name="coordenada" required />
                      </div>
                    </div>

                    <div className="input-denuncia">
                      <label>Breve descricao do local com lixo</label>
                      <input onChange={(e) => setDescricao(e.target.value)} type="text" name="descricao"/>
                    </div>

                    <div className="input-denuncia">
                      <label>Comentários</label>
                      <input onChange={(e) => setComentario(e.target.value)} type="text" name="comentario"/>
                    </div>

                    <button onClick={req} type="submit">ENVIAR</button>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  );
};

export default Home;
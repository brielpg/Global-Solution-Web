"use client";

import Footer from '@/app/components/Footer/footer';
import Navbar from '@/app/components/Navbar/navbar';
import React from 'react';
import axios from 'axios';
import { useState } from 'react'
import "./login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("")
  const [psw, setPsw] = useState("")

  const req = async ()=> {
      try{
        const response = await axios({
          method: "post",
          url: "http://localhost:8080/globalsolution/login",
          headers: {"Content-Type": "application/json"},
          data: {
            "email": email,
            "senha": psw,
          }
        })
        console.log(response)
      }catch(err){
        console.log(err)
      }
    }

  return (
    <div className='bg-login'>
        <Navbar/>
        <div className="login-body">
            <div className="login-container">
                <h1>LOGIN</h1>
                <div className='login-form-container'>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} name='email' placeholder="Email" required/>
                    <input type="password" onChange={(e) => setPsw(e.target.value)} name="senha" placeholder="Senha" required/>
                    <button type="submit" onClick={req}>ENTRAR</button>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  );
};

export default Login;
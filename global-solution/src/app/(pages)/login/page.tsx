import Footer from '@/app/components/Footer/footer';
import Navbar from '@/app/components/Navbar/navbar';
import React from 'react';
import "./login.css";

const Login: React.FC = () => {
  return (
    <div className='bg-login'>
        <Navbar/>
        <div className="login-body">
            <div className="login-container">
                <h1>LOGIN</h1>
                <div className='login-form-container'>
                    <input type="email" placeholder="Email" required/>
                    <input type="password" placeholder="Senha" required/>
                    <button type="submit">ENTRAR</button>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  );
};

export default Login;
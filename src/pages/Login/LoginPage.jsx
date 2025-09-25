// src/pages/Login/LoginPage.jsx

import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // 1. Importar o 'motion'
import Button from '../../components/common/Button/Button';
import Input from '../../components/common/Input/Input';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/onboarding');
  };

  // 2. Definir as variantes da animação
  const cardVariants = {
    initial: {
      opacity: 0,
      y: 50, // Começa 50px abaixo da posição final e invisível
    },
    animate: {
      opacity: 1,
      y: 0, // Anima para a posição original e fica visível
      transition: {
        duration: 0.6,
        ease: "easeOut", // Efeito de desaceleração suave no final
      },
    },
  };

  return (
    <div className="login-page-container">
      {/* 3. Trocar 'div' por 'motion.div' e aplicar as variantes */}
      <motion.div
        className="login-card"
        variants={cardVariants}
        initial="initial"
        animate="animate"
      >
        <div className="login-header">
            <img src="/humanizy-logo.png" alt="Humanizy Logo" className="login-logo" />
            <h1 className="login-brand-name">humanizy</h1>
        </div>
        <h2 className="login-title">Login</h2>
        <div className="login-form">
          <Input
            label="E-mail"
            name="email"
            type="email"
            placeholder=" "
          />
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder=" "
          />
          <a href="#" className="forgot-password-link">Forgot password?</a>
          <Button variant="primary" type="button" onClick={handleLogin}>
            Login
          </Button>
        </div>
        <p className="signup-link">
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
// src/pages/Onboarding/steps/WelcomeStep.jsx

import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Importar motion
import Button from '../../../components/common/Button/Button';
import './WelcomeStep.css';

const WelcomeStep = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/onboarding/agent-config');
  };

  // Variante para o container orquestrar a animação dos filhos
  const containerVariants = {
    hidden: { opacity: 1 }, // Começa visível para não piscar
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Intervalo entre a animação de cada item
      },
    },
  };

  // Variante para cada item (ilustração, textos, botão)
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { ease: 'easeOut' } },
  };

  return (
    <motion.div
      className="welcome-step-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="illustration-placeholder" variants={itemVariants}>
        <img src="/image-welcome.png" alt="Ilustração de Boas-Vindas" />
      </motion.div>

      <motion.h1 variants={itemVariants}>Welcome!</motion.h1>

      <motion.p variants={itemVariants}>
        Let's set up your AI agent.
        This will only take a few minutes.
      </motion.p>

      <motion.div className="welcome-actions" variants={itemVariants}>
        <Button onClick={handleStart} variant="primary">
          Get started
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeStep;
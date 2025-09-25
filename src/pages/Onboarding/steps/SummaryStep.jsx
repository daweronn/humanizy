// src/pages/Onboarding/steps/SummaryStep.jsx

// --- Imports ---
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../../../components/common/Button/Button';
import './SummaryStep.css';

// --- Component ---
const SummaryStep = () => {
  // --- Hooks ---
  const navigate = useNavigate();

  // --- Mocked Data ---
  const mockData = {
    agentName: 'Agente de Exemplo',
    platforms: 'WhatsApp, Instagram',
    productsCount: 8,
    faqsCount: 0,
  };

  // --- Functions ---
  const goToDashboard = () => {
    console.log("Navegando para o Dashboard");
    navigate('/dashboard');
  };

  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 0.4,
      },
    },
  };

  // --- Render ---
  return (
    <motion.div 
      className="summary-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div variants={itemVariants} className="summary-icon">🎉</motion.div>
      <motion.h1 variants={itemVariants}>Congratulations! Your agent is ready.</motion.h1>
      <motion.p variants={itemVariants}>Your AI agent has been configured successfully.</motion.p>

      {/* ALTERADO: Agrupamos os dois cards dentro do novo container .summary-body */}
      <motion.div className="summary-body" variants={itemVariants}>
        <div className="summary-details">
          <h4>Configuration Summary:</h4>
          <ul>
            <li>
              <strong>Name:</strong> {mockData.agentName}
            </li>
            <li>
              <strong>Platforms:</strong> {mockData.platforms}
            </li>
            <li>
              <strong>Products/Services:</strong> {mockData.productsCount}
            </li>
            <li>
              <strong>FAQs:</strong> {mockData.faqsCount}
            </li>
          </ul>
        </div>

        <div className="next-steps">
          <h4>Next steps:</h4>
          <ul>
            <li>Configure integrations (WhatsApp/Instagram)</li>
            <li>Add more products or FAQs as needed</li>
            <li>Test the agent with sample messages</li>
            <li>Monitor analytics and conversations</li>
          </ul>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} style={{ width: '100%'}}>
        <Button onClick={goToDashboard} variant="primary" style={{ marginTop: '24px' }}>
         Go to Dashboard
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default SummaryStep;
// src/pages/Onboarding/steps/AgentConfigStep.jsx

// --- Imports ---
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Input from '../../../components/common/Input/Input';
import SelectionCard from '../../../components/common/SelectionCard/SelectionCard';
import Button from '../../../components/common/Button/Button';
import './AgentConfigStep.css';

// --- Organizational Comments ---
// - Component: AgentConfigStep
//   - The second screen in the onboarding flow with entry animations.

// --- Component ---
const AgentConfigStep = () => {
  // --- Hooks ---
  const navigate = useNavigate();

  // --- State ---
  const [formData, setFormData] = useState({
    agentName: '',
    platforms: {
      whatsapp: false,
      instagram: false,
    },
    companyName: '',
    phone: '',
  });

  // --- Functions ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePlatformChange = (platform) => {
    setFormData(prev => ({
      ...prev,
      platforms: {
        ...prev.platforms,
        [platform]: !prev.platforms[platform],
      }
    }));
  };

  const handleNext = () => {
    console.log("Form Data:", formData);
    navigate('/onboarding/integrations');
  };
  
  const handleBack = () => {
    navigate('/onboarding');
  };

  // --- Animation Variants ---
  const formContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Anima os filhos com um pequeno atraso entre eles
      },
    },
  };

  const formItemVariants = {
    hidden: { y: 20, opacity: 0 }, // Começa 20px abaixo e invisível
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 0.3,
      },
    },
  };

  // --- Render ---
  return (
    <motion.div
      className="form-container"
      variants={formContainerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden" // Adiciona uma animação de saída também
    >
      <motion.div className="form-header" variants={formItemVariants}>
        <h2>AI Agent Configuration</h2>
        <p>Let's customize your intelligent assistant</p>
      </motion.div>

      <motion.div className="form-body" variants={formItemVariants}>
        <Input
          label="What do you want to name your AI agent? *"
          name="agentName"
          value={formData.agentName}
          onChange={handleChange}
          placeholder="E.g., Store Assistant, Maya, Alex..."
          helperText="This will be the name your customers see"
        />

        <div className="selection-group">
          <label className="input-label">Where do you want your AI agent to operate?</label>
          <SelectionCard
            label="WhatsApp"
            checked={formData.platforms.whatsapp}
            onChange={() => handlePlatformChange('whatsapp')}
          />
          <SelectionCard
            label="Instagram"
            checked={formData.platforms.instagram}
            onChange={() => handlePlatformChange('instagram')}
          />
        </div>
        
        <div className="form-row">
            <Input
              label="Company Name"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
            <Input
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
        </div>
      </motion.div>

      <motion.div className="form-navigation" variants={formItemVariants}>
        <Button onClick={handleBack} variant="secondary">Back</Button>
        <Button onClick={handleNext} variant="primary">Next</Button>
      </motion.div>
    </motion.div>
  );
};

export default AgentConfigStep;
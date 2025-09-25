// src/pages/Onboarding/steps/IntegrationsStep.jsx

// --- Imports ---
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import IntegrationCard from '../components/IntegrationCard/IntegrationCard';
import Button from '../../../components/common/Button/Button';
import './IntegrationsStep.css';

// --- Mocks ---
const integrations = [
    { id: 'nuvemshop', name: 'Nuvemshop', description: 'Sync products, orders, and customers automatically.', tags: ['Auto Products', 'Order Status', 'Abandoned Cart'], isPopular: true, icon: '☁️' },
    { id: 'loja_integrada', name: 'Loja Integrada', description: 'Full integration with Loja Integrada.', tags: ['Product Catalogs', 'Inventory Management', 'Sales Reports'], isPopular: true, icon: '🏠' },
    { id: 'shopify', name: 'Shopify', description: 'Sync products, orders, and customers automatically.', tags: ['Auto Products', 'Order Status', 'Abandoned Cart'], icon: '🛍️' },
    { id: 'woocommerce', name: 'WooCommerce', description: 'Full integration with WordPress.', tags: ['Product Catalogs', 'Inventory Management', 'Sales Reports'], icon: '📦' },
    { id: 'manual', name: 'Manual Setup', description: 'Prefer to add products manually in the next step.', tags: ['Full Control', 'No Dependencies', 'Quick Setup'], icon: '✍️' },
];

// --- Component ---
const IntegrationsStep = () => {
  // --- Hooks ---
  const navigate = useNavigate();

  // --- State ---
  const [selectedIntegration, setSelectedIntegration] = useState(null);

  // --- Functions ---
  const handleNext = () => {
    console.log("Selected Integration:", selectedIntegration);
    navigate('/onboarding/portfolio');
  };
  
  const handleBack = () => {
    navigate('/onboarding/agent-config');
  };

  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // Atraso para esperar a animação de expansão do card principal (0.4s no CSS)
        delayChildren: 0.4,
        // Anima os filhos em sequência com um intervalo de 0.1s
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: 'easeOut', duration: 0.4 },
    },
  };

  // --- Render ---
  return (
    <div className="integrations-step-wrapper">
      <motion.div
        className="integrations-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.div className="form-header" variants={itemVariants}>
          <h2>E-commerce Integration</h2>
          <p>Do you already have an online store? We can integrate your products.</p>
        </motion.div>

        <motion.div className="integrations-list" variants={itemVariants}>
          {integrations.map(integration => (
            <IntegrationCard
              key={integration.id}
              icon={integration.icon}
              title={integration.name}
              description={integration.description}
              tags={integration.tags}
              isPopular={integration.isPopular}
              isSelected={selectedIntegration === integration.id}
              onSelect={() => setSelectedIntegration(integration.id)}
            />
          ))}
        </motion.div>

        <motion.div className="form-navigation" variants={itemVariants}>
          <Button onClick={handleBack} variant="secondary">Back</Button>
          <Button onClick={handleNext} variant="primary">Next</Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default IntegrationsStep;
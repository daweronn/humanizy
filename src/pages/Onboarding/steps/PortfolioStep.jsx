// src/pages/Onboarding/steps/PortfolioStep.jsx

// --- Imports ---
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../../../components/common/Button/Button';
import Modal from '../../../components/common/Modal/Modal';
import Input from '../../../components/common/Input/Input';
import './PortfolioStep.css';

// --- Component ---
const PortfolioStep = () => {
  // --- Hooks ---
  const navigate = useNavigate();

  // --- State ---
  const [items, setItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItemName, setCurrentItemName] = useState('');

  // --- Functions ---
  const handleAddItem = () => {
    // Adiciona um novo item à lista e limpa o input do modal
    if (currentItemName.trim() === '') return;
    setItems([...items, { id: Date.now(), name: currentItemName }]);
    setCurrentItemName('');
    setIsModalOpen(false);
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };
  
  const handleNext = () => { /* navigate('/onboarding/faq'); */ };
  const handleBack = () => { navigate('/onboarding/integrations'); };

  // --- Animation Variants ---
  // ... (reutilize variantes de animação se desejar)

  // --- Render ---
  return (
    <div className="portfolio-container">
      <div className="form-header">
        <h2>Portfolio / Products or Services</h2>
        <p>What do you offer your customers?</p>
      </div>

      <div className="portfolio-content">
        <div className="portfolio-list">
          {items.map(item => (
            <motion.div key={item.id} className="portfolio-item" layout>
              <span>{item.name}</span>
              <button onClick={() => handleDeleteItem(item.id)}>&times;</button>
            </motion.div>
          ))}
          <button className="add-item-card" onClick={() => setIsModalOpen(true)}>
            + Add Product or Service
          </button>
        </div>
      </div>

      <div className="form-navigation">
        <Button onClick={handleBack} variant="secondary">Back</Button>
        <Button onClick={handleNext} variant="primary">Next</Button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="add-item-modal">
          <h3>Add New Product/Service</h3>
          <Input
            label="Product/Service Name"
            value={currentItemName}
            onChange={(e) => setCurrentItemName(e.target.value)}
            placeholder="E.g., Premium Consulting"
          />
          <Button onClick={handleAddItem} variant="primary" style={{ marginTop: '16px' }}>
            Save Item
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default PortfolioStep;
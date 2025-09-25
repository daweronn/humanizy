// src/pages/Onboarding/steps/WelcomeStep.jsx

// --- Imports ---
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/common/Button/Button';
import './WelcomeStep.css';

// --- Organizational Comments ---
// - Component: WelcomeStep
//   - The first screen in the onboarding flow (New Design).

// --- Component ---
const WelcomeStep = () => {
  // --- Hooks ---
  const navigate = useNavigate();

  // --- Functions ---
  const handleStart = () => {
    navigate('/onboarding/agent-config'); 
  };
  
  // --- Render ---
  return (
    <div className="welcome-step-container">
      <div className="illustration-placeholder">
        <img src="/image-welcome.png" alt="Ilustração de Boas-Vindas" />
      </div>
      
      <h1>Welcome!</h1>
      
      <p>
        Let's set up your AI agent.
        This will only take a few minutes.
      </p>

      <div className="welcome-actions">
        <Button onClick={handleStart} variant="primary">
          Get started
        </Button>
      </div>
    </div>
  );
};

export default WelcomeStep;
// src/pages/Onboarding/steps/SummaryStep.jsx

// --- Imports ---
import { useNavigate } from 'react-router-dom';
import { useOnboarding } from '../../../context/OnboardingContext';
import Button from '../../../components/common/Button/Button';
import './SummaryStep.css';

// --- Organizational Comments ---
// - Component: SummaryStep
//   - The final screen in the onboarding flow, showing a summary of the configuration.

// --- Component ---
const SummaryStep = () => {
  // --- Hooks ---
  const navigate = useNavigate();
  const { onboardingData } = useOnboarding();

  // --- Functions ---
  const goToDashboard = () => {
    console.log("Final Onboarding Data:", onboardingData);
    navigate('/dashboard');
  };

  // --- Render ---
  return (
    <div className="summary-container">
      <div className="summary-icon">🎉</div>
      <h1>Congratulations! Your agent is ready.</h1>
      <p>Your AI agent has been configured successfully.</p>

      <div className="summary-details">
        <h4>Configuration Summary:</h4>
        <ul>
          <li>
            <strong>Name:</strong> {onboardingData.agentName || "Not configured"}
          </li>
          <li>
            <strong>Platforms:</strong> A configurar
          </li>
          <li>
            <strong>Products/Services:</strong> {onboardingData.portfolioItems.length}
          </li>
          <li>
            <strong>FAQs:</strong> 0
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

      <Button onClick={goToDashboard} variant="primary" style={{ marginTop: '24px' }}>
        → Go to Dashboard
      </Button>
    </div>
  );
};

export default SummaryStep;
// src/pages/Onboarding/components/StepIndicator/StepIndicator.jsx

// --- Imports ---
import './StepIndicator.css';

// --- Organizational Comments ---
// - Component: StepIndicator
//   - Displays the animated, numbered steps for the onboarding flow.
//   - Props:
//     - totalSteps: Total number of steps.
//     - currentStep: The currently active step (1-based index).

// --- Component ---
const StepIndicator = ({ totalSteps = 5, currentStep = 1 }) => {
  // --- State and Variables ---
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

  // --- Functions ---
  const getDotClass = (step) => {
    if (step < currentStep) return 'completed';
    if (step === currentStep) return 'active';
    return '';
  };

  const getLineClass = (step) => {
    if (step < currentStep) return 'completed';
    return '';
  };

  // --- Render ---
  return (
    <div className="step-indicator">
      {steps.map((step) => (
        <div key={step} className="step-item">
          <div className={`step-dot ${getDotClass(step)}`}>
            {step < currentStep ? '✔' : ''}
          </div>
          {step < totalSteps && (
            <div className="step-line-container">
              <div className={`step-line-fill ${getLineClass(step)}`}></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
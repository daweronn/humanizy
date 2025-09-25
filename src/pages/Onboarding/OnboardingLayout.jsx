// src/pages/Onboarding/OnboardingLayout.jsx

// --- Imports ---
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import StepIndicator from './components/StepIndicator/StepIndicator';
import './OnboardingLayout.css';
import { useEffect, useState } from 'react';

// --- Organizational Comments ---
// - Component: OnboardingLayout
//   - Provides the main centered card structure for the onboarding wizard.

// --- Component ---
const OnboardingLayout = () => {
  // --- Hooks ---
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(1);

  // --- Effects ---
  useEffect(() => {
    const pathMap = {
      '/onboarding': 1,
      '/onboarding/agent-config': 2,
      '/onboarding/integrations': 3,
      // Adicione futuras rotas aqui
    };
    setCurrentStep(pathMap[location.pathname] || 1);
  }, [location]);

  // --- Animation Variants ---
  const pageVariants = { /* ... seu código de animação ... */ };
  const pageTransition = { /* ... seu código de animação ... */ };

  // --- Render ---
  return (
    <div className="onboarding-container">
      <div className="onboarding-card">
        <div className="onboarding-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="onboarding-footer">
          <StepIndicator currentStep={currentStep} totalSteps={5} />
        </div>
      </div>
    </div>
  );
};

export default OnboardingLayout;
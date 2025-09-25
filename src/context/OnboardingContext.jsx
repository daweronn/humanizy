// src/context/OnboardingContext.jsx

// --- Imports ---
import { createContext, useContext, useState } from 'react';

// --- Organizational Comments ---
// - Context: OnboardingContext
//   - Stores all data collected during the onboarding flow.

// --- 1. Create the Context ---
const OnboardingContext = createContext();

// --- 2. Create the Provider Component ---
// This component will wrap our app and provide the state.
export const OnboardingProvider = ({ children }) => {
  const [onboardingData, setOnboardingData] = useState({
    agentName: '',
    platforms: {},
    companyName: '',
    phone: '',
    website: '',
    description: '',
    integration: null,
    portfolioItems: [], // AQUI VAMOS GUARDAR OS ITENS!
    faq: {}
  });

  // Function to update portfolio items
  const setPortfolioItems = (items) => {
    setOnboardingData(prevData => ({
      ...prevData,
      portfolioItems: items
    }));
  };

  // We can add other updater functions here later

  const value = {
    onboardingData,
    setPortfolioItems
  };

  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  );
};

// --- 3. Create a Custom Hook for easy access ---
export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
};
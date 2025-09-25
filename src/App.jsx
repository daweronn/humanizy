// src/App.jsx

// --- Imports ---
import AppRouter from './router';
import { OnboardingProvider } from './context/OnboardingContext';

// --- Component ---
function App() {
  return (
    // Envolvemos o AppRouter com nosso novo Provider
    <OnboardingProvider>
      <AppRouter />
    </OnboardingProvider>
  );
}

export default App;
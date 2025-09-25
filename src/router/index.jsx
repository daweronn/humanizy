// src/router/index.jsx

// --- Imports ---
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// --- Layouts ---
import OnboardingLayout from '../pages/Onboarding/OnboardingLayout';
// --- Page Components ---
import WelcomeStep from '../pages/Onboarding/steps/WelcomeStep';
import AgentConfigStep from '../pages/Onboarding/steps/AgentConfigStep';
import IntegrationsStep from '../pages/Onboarding/steps/IntegrationsStep';
import PortfolioStep from '../pages/Onboarding/steps/PortfolioStep';

const Dashboard = () => <div>Dashboard Page</div>;
const Login = () => <div>Login Page</div>;

// --- Route Definitions ---
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    id: 'onboarding', // Adicionamos um ID para facilitar a busca
    path: '/onboarding',
    element: <OnboardingLayout />,
    children: [
      { 
        index: true, 
        element: <WelcomeStep />, 
        handle: { step: 1, layoutSize: 'narrow' } // Metadata da rota
      },
      { 
        path: 'agent-config', 
        element: <AgentConfigStep />, 
        handle: { step: 2, layoutSize: 'narrow' } // Metadata da rota
      },
      { 
        path: 'integrations', 
        element: <IntegrationsStep />, 
        handle: { step: 3, layoutSize: 'wide' } // Metadata da rota
      },
      { 
        path: 'portfolio', 
        element: <PortfolioStep />, 
        handle: { step: 3, layoutSize: 'wide' } // Metadata da rota
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);

// --- Router Component ---
const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
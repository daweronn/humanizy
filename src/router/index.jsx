// src/router/index.jsx

// --- Imports ---
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// --- Layouts ---
import OnboardingLayout from '../pages/Onboarding/OnboardingLayout';
import DashboardLayout from '../components/layout/DashboardLayout/DashboardLayout'; // Importar o novo layout
// --- Page Components ---
import WelcomeStep from '../pages/Onboarding/steps/WelcomeStep';
import AgentConfigStep from '../pages/Onboarding/steps/AgentConfigStep';
import IntegrationsStep from '../pages/Onboarding/steps/IntegrationsStep';
import PortfolioStep from '../pages/Onboarding/steps/PortfolioStep';
import SummaryStep from '../pages/Onboarding/steps/SummaryStep';
import LoginPage from '../pages/Login/LoginPage';
import DashboardPage from '../pages/Dashboard/DashboardPage';

// --- Route Definitions ---
const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    id: 'onboarding',
    path: '/onboarding',
    element: <OnboardingLayout />,
    children: [
      {
        index: true,
        element: <WelcomeStep />,
        handle: { step: 1, layoutSize: 'narrow' }
      },
      {
        path: 'agent-config',
        element: <AgentConfigStep />,
        handle: { step: 2, layoutSize: 'narrow' }
      },
      {
        path: 'integrations',
        element: <IntegrationsStep />,
        handle: { step: 3, layoutSize: 'wide' }
      },
      {
        path: 'portfolio',
        element: <PortfolioStep />,
        handle: { step: 4, layoutSize: 'wide' }
      },
      {
        path: 'summary',
        element: <SummaryStep />,
        handle: { step: 5, layoutSize: 'narrow' }
      }
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />, // O layout agora é o elemento pai
    children: [
      {
        index: true, // A página do dashboard é a rota filha padrão
        element: <DashboardPage />,
      }
      // Outras páginas do dashboard (como /dashboard/settings) podem ser adicionadas aqui no futuro
    ],
  },
]);

// --- Router Component ---
const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
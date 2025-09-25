// src/layouts/DashboardLayout.jsx

import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion'; // Importar motion
import Sidebar from '../../layout/Sidebar/Sidebar';
import './DashboardLayout.css';

const DashboardLayout = () => {
  // Variantes para a animação do card
  const cardVariants = {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <div className="dashboard-container">
      {/* Aplicando a animação ao card */}
      <motion.div
        className="dashboard-card-layout"
        variants={cardVariants}
        initial="initial"
        animate="animate"
      >
        <Sidebar />
        <main className="dashboard-main-content">
          <Outlet />
        </main>
      </motion.div>
    </div>
  );
};

export default DashboardLayout;
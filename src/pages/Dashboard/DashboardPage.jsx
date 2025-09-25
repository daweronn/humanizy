// src/pages/Dashboard/DashboardPage.jsx

import { motion } from 'framer-motion'; // Importar motion
import StatCard from '../../components/dashboard/StatCard';
import './DashboardPage.css';

const DashboardPage = () => {
  const mockStats = {
    conversations: 1204,
    activeUsers: 315,
    autoResponse: 936,
  };

  // Variante para orquestrar a animação dos filhos
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3, // Atraso para a animação do card terminar
      },
    },
  };

  // Variante para cada item do conteúdo
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { ease: 'easeOut' } },
  };

  return (
    // Container da animação
    <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
    >
      <motion.header className="dashboard-header" variants={itemVariants}>
        <h1>Dashboard</h1>
        <button className="filter-button">☰</button>
      </motion.header>

      <motion.section className="stats-grid" variants={itemVariants}>
        <StatCard title="Conversations" value={mockStats.conversations.toLocaleString('en-US')} percentageChange={20.1} />
        <StatCard title="Active Users" value={mockStats.activeUsers.toLocaleString('en-US')} percentageChange={12.8} />
        <StatCard title="AutoRespt" value={mockStats.autoResponse.toLocaleString('en-US')} percentageChange={-5.4} />
      </motion.section>

      <motion.section className="charts-container" variants={itemVariants}>
        <div className="chart-card">
          <h3>Conversations</h3>
          <div className="chart-placeholder">(Gráfico de Conversas)</div>
        </div>
        <div className="chart-card">
          <h3>Response Time</h3>
          <div className="chart-placeholder">(Gráfico de Tempo de Resposta)</div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default DashboardPage;
// src/components/dashboard/StatCard.jsx

import './StatCard.css';

const StatCard = ({ title, value, percentageChange }) => {
  const isPositive = percentageChange >= 0;

  return (
    <div className="stat-card">
      <h3 className="stat-title">{title}</h3>
      <p className="stat-value">{value}</p>
      <div className={`stat-change ${isPositive ? 'positive' : 'negative'}`}>
        <span>{isPositive ? '↑' : '↓'}</span>
        {Math.abs(percentageChange)}%
      </div>
    </div>
  );
};

// Certifique-se de que esta linha está no final do arquivo!
export default StatCard;
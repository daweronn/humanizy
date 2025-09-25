// src/pages/Onboarding/components/IntegrationCard/IntegrationCard.jsx

// --- Imports ---
import './IntegrationCard.css';

// --- Organizational Comments ---
// - Component: IntegrationCard
//   - A selectable card for e-commerce integration options.

// --- Component ---
const IntegrationCard = ({ icon, title, description, tags = [], isPopular = false, isSelected, onSelect }) => {
  // --- State and Variables ---
  const cardClassName = `integration-card ${isSelected ? 'selected' : ''}`;

  // --- Render ---
  return (
    <div className={cardClassName} onClick={onSelect}>
      {isPopular && <div className="popular-badge">Most Popular</div>} {/* Traduzido para inglês */}
      <div className="card-header">
        <div className="card-icon">{icon || '🛒'}</div> {/* Ícone padrão */}
        <div className="card-title-section">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
      </div>
      {tags.length > 0 && (
        <div className="card-tags">
          {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
      )}
    </div>
  );
};

export default IntegrationCard;
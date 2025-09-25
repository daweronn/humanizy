// src/components/common/SelectionCard/SelectionCard.jsx

// --- Imports ---
import './SelectionCard.css';

// --- Organizational Comments ---
// - Component: SelectionCard
//   - A clickable card that acts like a large checkbox or radio button.
//   - Props:
//     - label: The main text for the card.
//     - checked: Boolean to determine if the card is selected.
//     - onChange: Function to call when the card is clicked.

// --- Component ---
const SelectionCard = ({ label, checked, onChange }) => {
  // --- State and Variables ---
  const cardClassName = `selection-card ${checked ? 'checked' : ''}`;

  // --- Render ---
  return (
    <div className={cardClassName} onClick={onChange}>
      <div className="radio-indicator"></div>
      <span className="selection-label">{label}</span>
    </div>
  );
};

export default SelectionCard;
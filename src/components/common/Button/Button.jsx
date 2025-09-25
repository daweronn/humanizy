// src/components/common/Button/Button.jsx

// --- Imports ---
import './Button.css';

// --- Organizational Comments ---
// - Component: Button
//   - A reusable button with different visual variants.
//   - Props:
//     - children: The text or elements inside the button.
//     - onClick: Function to execute on click.
//     - variant: 'primary' (default) or 'secondary'.
//     - type: 'button' (default), 'submit', 'reset'.
//     - className: Additional custom classes.

// --- Component ---
const Button = ({ children, onClick, variant = 'primary', type = 'button', className = '' }) => {
  // --- State and Variables ---
  const buttonClass = `btn ${variant === 'primary' ? 'btn-primary' : 'btn-secondary'} ${className}`;

  // --- Render ---
  return (
    <button type={type} className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
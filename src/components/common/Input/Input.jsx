// src/components/common/Input/Input.jsx

// --- Imports ---
import './Input.css';

// --- Organizational Comments ---
// - Component: Input
//   - A reusable text input field with a label and helper text.
//   - Props:
//     - label: The text for the <label> tag.
//     - helperText: Optional text displayed below the input.
//     - ...props: Any other standard input props (type, placeholder, name, value, onChange).

// --- Component ---
const Input = ({ label, helperText, ...props }) => {
  // --- Render ---
  return (
    <div className="input-wrapper">
      <label className="input-label">{label}</label>
      <input className="input-field" {...props} />
      {helperText && <p className="input-helper-text">{helperText}</p>}
    </div>
  );
};

export default Input;
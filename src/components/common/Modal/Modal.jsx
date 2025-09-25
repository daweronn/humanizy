// src/components/common/Modal/Modal.jsx

// --- Imports ---
import { motion, AnimatePresence } from 'framer-motion';
import './Modal.css';

// --- Organizational Comments ---
// - Component: Modal
//   - A reusable modal component with an overlay.
//   - Props:
//     - isOpen: Boolean to control visibility.
//     - onClose: Function to call when the modal should close.
//     - children: The content to be rendered inside the modal.

// --- Component ---
const Modal = ({ isOpen, onClose, children }) => {
  // --- Animation Variants ---
  const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { y: "-50px", opacity: 0 },
    visible: { y: "0", opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    exit: { y: "50px", opacity: 0 },
  };

  // --- Render ---
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose} // Fecha ao clicar no fundo
        >
          <motion.div
            className="modal-content"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()} // Previne fechar ao clicar no conteúdo
          >
            <button className="modal-close-button" onClick={onClose}>&times;</button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
import React from 'react';
import './Modal.css'; // Importing CSS for styles

interface ModalProps {
  isOpen: boolean; // To control the modal visibility
  onClose: () => void; // Function to close the modal
  title: string; // Title of the modal
  children: React.ReactNode; // Content to display inside the modal
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; // Return null if modal is not open

  return (
    <div className="modal-overlay" onClick={onClose}> {/* Overlay to close modal on click */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Prevent closing on content click */}
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>×</button> {/* Close button */}
        </div>
        <div className="modal-body">
          {children} {/* Modal content */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
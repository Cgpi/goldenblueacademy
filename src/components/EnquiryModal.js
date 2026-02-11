import React from "react";
import EnquiryForm from "../pages/EnquiryForm";
import "../styles/enquirymodal.css";

const EnquiryModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="gba-modal-overlay" onClick={onClose}>
      <div className="gba-modal-content" onClick={(e) => e.stopPropagation()}>
        <EnquiryForm onClose={onClose} />
      </div>
    </div>
  );
};

export default EnquiryModal;

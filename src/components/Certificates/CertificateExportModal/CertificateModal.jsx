import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './CertificateModal.module.css';

// Set the app element for accessibility
Modal.setAppElement('#root'); // Replace '#root' with the ID of your main container if different

const CertificateModal = ({ isOpen, onClose, onGenerate }) => {
  const [name, setName] = useState('');
  const [certificateName, setCertificateName] = useState('');
  const [dateIssued, setDateIssued] = useState('');

  const handleSubmit = () => {
    onGenerate({ name, certificateName, dateIssued });
    onClose();
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onClose} 
      className={styles.modalContent} 
      overlayClassName={styles.modalOverlay}
    >
      <h2>Customize Certificate</h2>
      <div>
        <label>Recipient Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Certificate Name:</label>
        <input type="text" value={certificateName} onChange={(e) => setCertificateName(e.target.value)} />
      </div>
      <div>
        <label>Date Issued:</label>
        <input type="text" value={dateIssued} onChange={(e) => setDateIssued(e.target.value)} />
      </div>
      <button onClick={handleSubmit}>Generate</button>
      <button className={styles.closeButton} onClick={onClose}>Cancel</button>
    </Modal>
  );
};

export default CertificateModal;

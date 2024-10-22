// ModernGradientCertificate.js
import React from 'react';
import './certificates.css'; // Import the single CSS file

const ModernGradientCertificate = ({ recipientName, achievement, date, signature }) => {
  return (
    <div className={`certificate modern-gradient`}>
      <h1 className="title">Achievement Award</h1>
      <p className="recipient">{recipientName}</p>
      <p className="achievement">{achievement}</p>
      <p className="date">Date: {date}</p>
      <p className="signature">Signed: {signature}</p>
    </div>
  );
};

export default ModernGradientCertificate;

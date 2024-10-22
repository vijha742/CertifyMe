// ColorfulCertificate.js
import React from 'react';
import './certificates.css'; // Import the single CSS file

const ColorfulCertificate = ({ recipientName, courseName, date, signature }) => {
  return (
    <div className={`certificate colorful`}>
      <h1 className="title">Colorful Certificate</h1>
      <p className="recipient">{recipientName}</p>
      <p className="course">{courseName}</p>
      <p className="date">Date: {date}</p>
      <p className="signature">Signed: {signature}</p>
    </div>
  );
};

export default ColorfulCertificate;

import React from 'react';
import ClassicCertificate from './CRF1/Cf1';
import ModernGradientCertificate from './CRF2/cf2';
import FloralCertificate from './CRF3/cf3';
import ColorfulCertificate from './CRF4/cf4';
import MinimalistCertificate from './CRF5/cf5';
import './certificates.css'; // Ensure to import the CSS

const CertificatesDisplay = () => {
  return (
    <div className="templatesSection">
      <div className="templateCard">
        <ClassicCertificate recipientName="John Doe" courseName="Web Development" date="October 22, 2024" signature="Jane Smith" />
      </div>
      <div className="templateCard">
        <ModernGradientCertificate recipientName="Alice Johnson" achievement="Completed AI Course" date="October 22, 2024" signature="Michael Brown" />
      </div>
      <div className="templateCard">
        <FloralCertificate recipientName="Sarah Davis" courseName="Graphic Design" date="October 22, 2024" signature="Emma Wilson" />
      </div>
      <div className="templateCard">
        <ColorfulCertificate recipientName="James Wilson" courseName="Data Science" date="October 22, 2024" signature="Liam Taylor" />
      </div>
      <div className="templateCard">
        <MinimalistCertificate recipientName="Emily Clark" courseName="Digital Marketing" date="October 22, 2024" signature="Olivia Harris" />
      </div>
    </div>
  );
};

export default CertificatesDisplay;

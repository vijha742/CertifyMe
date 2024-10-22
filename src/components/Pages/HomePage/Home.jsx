import React from 'react';
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas"; // Import html2canvas
import styles from './Home.module.css';
import NavbarTemp from "../../Navbars/NavabrTemp/NavbarTemp";
import { FaCertificate, FaUpload, FaCheckCircle } from 'react-icons/fa';
import CenteredContainer from "../../CenterdComponent/CenteredContainer";
import Certificate from '../../Certificates/CRF1/Cf1';

const Home = () => {
  const handleGeneratePDF = () => {
    const certificateElement = document.getElementById('certificateToPDF');

    html2canvas(certificateElement).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [800, 500], // Match the certificate size
      });

      pdf.addImage(imgData, 'PNG', 0, 0, 800, 500);
      pdf.save('certificate.pdf');
    }).catch((error) => {
      console.error("Error generating PDF: ", error);
    });
  };

  return (
    <CenteredContainer>
      <div className={styles.homeContainer}>
        <header className={styles.header}>
          <h1>Welcome to <span className={styles.certifyme}>CertifyMe</span></h1>
          <p>Your one-stop solution for generating and managing certificates!</p>
        </header>

        <section className={styles.generateSection}>
          <div className={styles.card}>
            <FaUpload className={styles.icon} />
            <h3>Upload CSV</h3>
            <p>Choose a CSV file with candidate names to get started.</p>
            <button className={styles.button}>Upload Now</button>
          </div>

          <div className={styles.card}>
            <FaCertificate className={styles.icon} />
            <h3>Select Template</h3>
            <p>Pick a template that fits your needs from our library.</p>
            <button className={styles.button}>View Templates</button>
          </div>

          <div className={styles.card}>
            <FaCheckCircle className={styles.icon} />
            <h3>Generate Certificates</h3>
            <p>Click to generate cool certificates in just a few seconds.</p>
            <button className={styles.button}>Generate Now</button>
          </div>
        </section>

        <section className={styles.templatesSection}>
          <h2>Certificate Templates</h2>
          <div className={styles.certificates}>
            <div id="certificateToPDF">
              <Certificate />
            </div>
            <button className={styles.pdfButton} onClick={handleGeneratePDF}>
              Convert to PDF
            </button>
          </div>
        </section>

        <footer className={styles.footer}>
          <p>&copy; 2024 CertifyMe. All Rights Reserved.</p>
        </footer>
      </div>
    </CenteredContainer>
  );
};

export default Home;

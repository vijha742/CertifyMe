// src/Home/Home.jsx
import React, { useRef, useState } from 'react';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import styles from './Home.module.css';
import { FaCertificate, FaUpload, FaCheckCircle } from 'react-icons/fa';
import CenteredContainer from "../../CenterdComponent/CenteredContainer";
import Certificate1 from '../../Certificates/CRF1/Cf1';
import Certificate2 from '../../Certificates/CRF2/cf2';
import Certificate3 from '../../Certificates/CRF3/cf3';
import Certificate4 from '../../Certificates/CRF4/cf4';
import Slider from 'react-slick';
import CertificateModal from '../../Certificates/CertificateExportModal/CertificateModal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [customization, setCustomization] = useState({ name: '', certificateName: '', dateIssued: '' });

  // Create refs for each certificate
  const certificate1Ref = useRef();
  const certificate2Ref = useRef();
  const certificate3Ref = useRef();
  const certificate4Ref = useRef();

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: '12%', // Adjust padding to reduce space
  };

  const handleGeneratePDF = async (certificateRef) => {
    const element = certificateRef.current;
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [800, 500],
    });

    doc.addImage(imgData, 'PNG', 0, 0, 800, 500);

    // Add the customized information to the PDF
    // Ensure you provide proper Y-coordinates for the text to be visible
    doc.text(`Recipient Name: ${customization.name}`, 50, 450);
    doc.text(`Certificate Name: ${customization.certificateName}`, 50, 470);
    doc.text(`Date Issued: ${customization.dateIssued}`, 50, 490);
    
    doc.save('certificate.pdf');
  };

  const openModal = (certificateRef) => {
    setSelectedCertificate(certificateRef);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
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
          <h2 className={styles.templateHeader}>Certificate Templates</h2>
          <Slider {...settings}>
            <div className={styles.sliderItem}>
              <Certificate1 ref={certificate1Ref} customization={customization} />
              <button className={styles.pdfButton} onClick={() => openModal(certificate1Ref)}>Customize</button>
            </div>
            <div className={styles.sliderItem}>
              <Certificate2 ref={certificate2Ref} customization={customization} />
              <button className={styles.pdfButton} onClick={() => openModal(certificate2Ref)}>Customize</button>
            </div>
            <div className={styles.sliderItem}>
              <Certificate3 ref={certificate3Ref} customization={customization} />
              <button className={styles.pdfButton} onClick={() => openModal(certificate3Ref)}>Customize</button>
            </div>
            <div className={styles.sliderItem}>
              <Certificate4 ref={certificate4Ref} customization={customization} />
              <button className={styles.pdfButton} onClick={() => openModal(certificate4Ref)}>Customize</button>
            </div>
          </Slider>
        </section>

        <footer className={styles.footer}>
          <p>&copy; 2024 CertifyMe. All Rights Reserved.</p>
        </footer>

        {/* Render the modal */}
        <CertificateModal 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          onGenerate={(customizationData) => {
            setCustomization(customizationData); // Set the customization details
            handleGeneratePDF(selectedCertificate); // Generate PDF after setting customization
          }} 
        />
      </div>
    </CenteredContainer>
  );
};

export default Home;

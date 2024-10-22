import React, { useState } from 'react';
import { FaCertificate, FaShieldAlt, FaUserCheck } from 'react-icons/fa';
import styles from './LandingPage.module.css';
import CenteredContainer from '../CenterdComponent/CenteredContainer';
import Login from '../Login&Signup/LoginModal/Login'; // Import the Login component
import Signup from '../Login&Signup/SignupModal/Signup'; // Import the Signup component

const LandingPage = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsSignupModalOpen(false); // Ensure the signup modal is closed
    setIsLoginModalOpen(true); // Open the login modal
  };

  const closeLoginModal = () => setIsLoginModalOpen(false);

  const openSignupModal = () => {
    setIsLoginModalOpen(false); // Ensure the login modal is closed
    setIsSignupModalOpen(true); // Open the signup modal
  };

  const closeSignupModal = () => setIsSignupModalOpen(false);

  return (
    <CenteredContainer>
      <div className={styles.container}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1>Welcome to <span className={styles.certifyme}>CertifyMe</span></h1>
            <p>Create effortless certificates and verify any time with CertifyMe.</p>
            <button className={styles.ctaBtn} onClick={openLoginModal}>Get Started</button>
          </div>

          {/* Floating shapes */}
          <div className={styles.floatingShapes}>
            <div className={`${styles.shape} ${styles.shape1}`}></div>
            <div className={`${styles.shape} ${styles.shape2}`}></div>
            <div className={`${styles.shape} ${styles.shape3}`}></div>
          </div>
        </section>

        <section className={styles.featuresSection}>
          <h2>Features</h2>
          <div className={styles.features}>
            <div className={styles.featureCard}>
              <FaCertificate className={styles.featureIcon} />
              <h3>Customizable Templates</h3>
              <p>Easily create certificates that reflect your brand.</p>
            </div>
            <div className={styles.featureCard}>
              <FaShieldAlt className={styles.featureIcon} />
              <h3>Secure Verification</h3>
              <p>Validate certificates with our unique verification system.</p>
            </div>
            <div className={styles.featureCard}>
              <FaUserCheck className={styles.featureIcon} />
              <h3>User-Friendly Interface</h3>
              <p>Design and issue certificates effortlessly.</p>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <p>&copy; 2024 CertifyMe. All rights reserved.</p>
        </footer>
      </div>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className={styles.modalOverlay}>
          <Login onClose={closeLoginModal} openSignupModal={openSignupModal} />
        </div>
      )}

      {/* Signup Modal */}
      {isSignupModalOpen && (
        <div className={styles.modalOverlay}>
          <Signup onClose={closeSignupModal} openLoginModal={openLoginModal} />
        </div>
      )}
    </CenteredContainer>
  );
};

export default LandingPage;

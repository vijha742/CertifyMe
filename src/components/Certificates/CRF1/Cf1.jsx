import React, { forwardRef } from 'react';
import { FaStar, FaSignature } from 'react-icons/fa'; // Import icons
import styles from './crf1.module.css'; // Assuming you're using modular CSS

const Certificate = forwardRef((props, ref) => (
  <div ref={ref} className={styles.certificate}>
    <h1 className={styles.title}>Certificate of Achievement</h1>
    <p className={styles.recipient}>
      Awarded to: <span className={styles.name}>[Recipient Name]</span>
    </p>
    <p className={styles.description}>For outstanding performance and dedication.</p>
    <p className={styles.date}>Date: 2024-10-23</p>

    {/* Signature section */}
    <div className={styles.signatureSection}>
      <FaSignature className={styles.signatureIcon} />
      <p className={styles.signature}>Authorized Signature</p>
    </div>

    {/* Decorative stars */}
    <div className={styles.stars}>
      <FaStar className={styles.star} />
      <FaStar className={styles.star} />
      <FaStar className={styles.star} />
    </div>
  </div>
));

export default Certificate;

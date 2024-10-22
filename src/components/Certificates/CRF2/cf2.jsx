import React, { forwardRef } from 'react';
import { FaRibbon } from 'react-icons/fa';
import styles from './crf2.module.css';

const Certificate2 = forwardRef((props, ref) => (
  <div ref={ref} className={styles.certificate}>
    <h1 className={styles.title}>Certificate of Achievement</h1>
    <p className={styles.recipient}>
      This is awarded to: <span className={styles.name}>[Recipient Name]</span>
    </p>
    <FaRibbon className={styles.ribbonIcon} />
    <p className={styles.description}>For your exceptional performance!</p>
    <p className={styles.date}>Date: 2024-10-23</p>
    <div className={styles.signatureSection}>
      <p>____________________</p>
      <p>Authorized Signature</p>
    </div>
  </div>
));

export default Certificate2;

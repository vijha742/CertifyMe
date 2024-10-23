import React from 'react';
import { auth } from '../../components/Login&Signup/firebase'; // Make sure to import your Firebase auth module
import styles from './ProfileModal.module.css'; // CSS module for styling
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const ProfileModal = ({ isOpen, onClose, user }) => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  if (!isOpen) return null; // Do not render if the modal is closed

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out from Firebase
      navigate('/'); // Redirect to landing page
    } catch (error) {
      console.error("Logout Error:", error.message); // Log error if logout fails
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>✖</button>
        <h2 className={styles.title}>User Profile</h2>
        <div className={styles.profileDetails}>
          <div className={styles.profileImageContainer}>
            {user.photoURL ? (
              <img 
                src={user.photoURL} 
                alt="Profile" 
                className={styles.profileImage} 
              />
            ) : (
              <div className={styles.placeholderImage}>No Image Available</div> // Fallback if no image
            )}
          </div>
          <div className={styles.profileItem}>
            <strong>{user.displayName || 'N/A'}</strong>
          </div>
          <div className={styles.profileItem}>
            <strong>Email:</strong> {user.email || 'N/A'}
          </div>
          <div className={styles.profileItem}>
            <strong>UID:</strong> {user.uid || 'N/A'} {/* User ID */}
          </div>
          <div className={styles.profileItem}>
            <strong>Creation Time:</strong> {user.metadata.creationTime || 'N/A'}
          </div>
          <div className={styles.profileItem}>
            <strong>Last Sign-in Time:</strong> {user.metadata.lastSignInTime || 'N/A'}
          </div>
        </div>
        {/* Center the Logout Button */}
        <div className={styles.logoutButtonContainer}>
          <button className={styles.logoutButton} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;

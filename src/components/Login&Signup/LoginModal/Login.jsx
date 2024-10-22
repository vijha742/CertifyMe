import React, { useState } from 'react';
import styles from './Login.module.css'; // Import CSS module
import { auth } from '../firebase'; 
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FaTimes } from 'react-icons/fa'; // Import close icon
import { Spinner } from 'react-bootstrap'; // Add a spinner from Bootstrap

const Login = ({ onClose, openSignupModal }) => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill all fields');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError(''); // Clear error if login is successful
      onClose(); // Close the modal after successful login
    } catch (error) {
      setError(error.message); // Set error message if login fails
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true); 
    const provider = new GoogleAuthProvider();
    
    try {
      await signInWithPopup(auth, provider);
      onClose(); // Close the modal after successful Google login
    } catch (error) {
      console.error("Google Sign-in Error", error);
      let errorMessage;
      
      switch (error.code) {
        case 'auth/popup-closed-by-user':
          errorMessage = "The popup was closed before completing the sign in.";
          break;
        case 'auth/cancelled-popup-request':
          errorMessage = "The popup request was cancelled.";
          break;
        case 'auth/network-request-failed':
          errorMessage = "Network error, please try again.";
          break;
        default:
          errorMessage = "Something went wrong during Google Sign-in.";
      }
      
      setError(errorMessage); // Set the error message dynamically
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className={styles.loginModal}>
      <div className={styles.loginContainer}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close login modal">
          <FaTimes />
        </button>
        <h2>Login</h2>
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              aria-label="Password"
            />
          </div>
          <button type="submit" className={styles.submitButton}>Login</button>
        </form>

        <div className={styles.googleSigninButton} onClick={handleGoogleSignIn}>
          {loading ? (
            <Spinner animation="border" size="sm" />
          ) : (
            <>
              <img
                src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" 
                alt="Google Icon"
                className={styles.googleIcon}
              />
              <span>Sign in with Google</span>
            </>
          )}
        </div>

        <p>
          Don't have an account? <button className={styles.switchLink} onClick={openSignupModal}>Sign up here</button>
        </p>
      </div>
    </div>
  );
};

export default Login;

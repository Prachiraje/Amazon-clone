import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Register.module.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = [useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })];

  const handleRegister = (e) => {
    e.preventDefault();
    // In a real app, this would make an API call. For now, navigate to home.
    navigate('/');
  };

  return (
    <div className={styles.registerContainer}>
      <Link to="/">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
          alt="Amazon" 
          className={styles.logo} 
        />
      </Link>

      <div className={styles.formContainer}>
        <h1 className={styles.title}>Create Account</h1>
        
        <form onSubmit={handleRegister}>
          <div className={styles.inputGroup}>
            <label>Your name</label>
            <input type="text" placeholder="First and last name" required />
          </div>

          <div className={styles.inputGroup}>
            <label>Mobile number or email</label>
            <input type="text" required />
          </div>

          <div className={styles.inputGroup}>
            <label>Password</label>
            <input type="password" placeholder="At least 6 characters" required />
            <div className={styles.infoText}>Passwords must be at least 6 characters.</div>
          </div>

          <div className={styles.inputGroup}>
            <label>Re-enter password</label>
            <input type="password" required />
          </div>

          <button type="submit" className={styles.continueButton}>Continue</button>
        </form>

        <div className={styles.termsText}>
          By creating an account, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.
        </div>
        
        <div className={styles.divider}></div>
        
        <div className={styles.businessText}>
          <a href="#">Buying for work? Create a free business account</a>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.signInSection}>
          Already have an account? <Link to="/login">Sign in <span className={styles.arrow}>▶</span></Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.backToTop} onClick={scrollToTop}>
        Back to top
      </div>
      
      <div className={styles.linkSection}>
        <div className={styles.linkContainer}>
          <div className={styles.linkCol}>
            <h3>Get to Know Us</h3>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Press Releases</a>
            <a href="#">Amazon Science</a>
          </div>
          <div className={styles.linkCol}>
            <h3>Connect with Us</h3>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
          <div className={styles.linkCol}>
            <h3>Make Money with Us</h3>
            <a href="#">Sell on Amazon</a>
            <a href="#">Sell under Amazon Accelerator</a>
            <a href="#">Protect and Build Your Brand</a>
            <a href="#">Amazon Global Selling</a>
            <a href="#">Become an Affiliate</a>
            <a href="#">Fulfilment by Amazon</a>
            <a href="#">Advertise Your Products</a>
            <a href="#">Amazon Pay on Merchants</a>
          </div>
          <div className={styles.linkCol}>
            <h3>Let Us Help You</h3>
            <a href="#">COVID-19 and Amazon</a>
            <a href="#">Your Account</a>
            <a href="#">Returns Centre</a>
            <a href="#">100% Purchase Protection</a>
            <a href="#">Amazon App Download</a>
            <a href="#">Help</a>
          </div>
        </div>
      </div>

      <div className={styles.line}></div>

      <div className={styles.bottomSection}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
          alt="Amazon Logo" 
          className={styles.logo}
        />
        <div className={styles.languageBox}>
          <span>🌐 English</span>
        </div>
      </div>
      
      <div className={styles.copyright}>
        <div className={styles.copyrightLinks}>
          <a href="#">Conditions of Use & Sale</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Interest-Based Ads</a>
        </div>
        <span>© 1996-2026, Amazon.com, Inc. or its affiliates</span>
      </div>
    </footer>
  );
};

export default Footer;

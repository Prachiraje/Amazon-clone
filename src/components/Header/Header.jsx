import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Search, ShoppingCart } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Logo */}
      <Link to="/" className={`${styles.navItem} ${styles.logoContainer}`}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
          alt="Amazon Logo" 
          className={styles.logo}
        />
        <span className={styles.logoIn}>.in</span>
      </Link>

      {/* Delivery Location */}
      <div className={`${styles.navItem} ${styles.delivery}`}>
        <MapPin size={18} className={styles.mapIcon} />
        <div className={styles.textContainer}>
          <span className={styles.line1}>Delivering to Mumbai 400001</span>
          <span className={styles.line2}>Update location</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className={styles.searchBar}>
        <select className={styles.searchSelect}>
          <option>All Categories</option>
          <option>Alexa Skills</option>
          <option>Amazon Devices</option>
          <option>Amazon Fashion</option>
          <option>Computers</option>
          <option>Electronics</option>
        </select>
        <input type="text" className={styles.searchInput} placeholder="Search Amazon.in" />
        <button className={styles.searchButton}>
          <Search size={24} color="#333" />
        </button>
      </div>

      {/* Language */}
      <div className={`${styles.navItem} ${styles.language}`}>
        {/* Placeholder flag */}
        <span className={styles.flag}>🇮🇳</span>
        <span className={styles.langText}>EN</span>
        <span className={styles.arrowDrop}>▼</span>
      </div>

      {/* Accounts & Lists */}
      <Link to="/register" className={`${styles.navItem} ${styles.account}`}>
        <div className={styles.textContainer}>
          <span className={styles.line1}>Hello, sign in</span>
          <span className={styles.line2}>Account & Lists <span className={styles.arrowDrop}>▼</span></span>
        </div>
      </Link>

      {/* Returns & Orders */}
      <div className={`${styles.navItem} ${styles.orders}`}>
        <div className={styles.textContainer}>
          <span className={styles.line1}>Returns</span>
          <span className={styles.line2}>& Orders</span>
        </div>
      </div>

      {/* Cart */}
      <Link to="/" className={`${styles.navItem} ${styles.cart}`}>
        <ShoppingCart size={32} />
        <span className={styles.cartCount}>0</span>
        <span className={styles.cartText}>Cart</span>
      </Link>
    </header>
  );
};

export default Header;

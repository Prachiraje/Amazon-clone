import React from 'react';
import { Menu } from 'lucide-react';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.navItem} ${styles.allMenu}`}>
        <Menu size={20} className={styles.menuIcon} />
        <span>All</span>
      </div>
      
      <div className={styles.navLinks}>
        <a href="#" className={styles.navItem}>Fresh</a>
        <a href="#" className={styles.navItem}>Amazon miniTV</a>
        <a href="#" className={styles.navItem}>Sell</a>
        <a href="#" className={styles.navItem}>Best Sellers</a>
        <a href="#" className={styles.navItem}>Mobiles</a>
        <a href="#" className={styles.navItem}>Today's Deals</a>
        <a href="#" className={styles.navItem}>Customer Service</a>
        <a href="#" className={styles.navItem}>Electronics</a>
      </div>

      <div className={styles.rightNav}>
        <a href="#" className={styles.navItem}>
          <img src="https://m.media-amazon.com/images/G/31/IN-hq/2021/img/Mobile_Traffic_/XCM_Manual_1321458_1651511_IN_3781247_400x39_en_IN._CB655944656_.jpg" alt="Join Prime" className={styles.adImg}/>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;

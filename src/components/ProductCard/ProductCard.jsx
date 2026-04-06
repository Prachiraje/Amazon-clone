import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ data }) => {
  if (data.type === "signin") {
    return (
      <div className={`${styles.card} ${styles.signInCard}`}>
        <h2 className={styles.title}>{data.title}</h2>
        <button className={styles.signInBtn}>Sign in securely</button>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{data.title}</h2>
      
      {data.type === "grid" ? (
        <div className={styles.imageGrid}>
          {data.items.map((item, index) => (
            <div key={index} className={styles.gridItem}>
              <img src={item.img} alt={item.label} className={styles.gridImg} />
              <span className={styles.gridLabel}>{item.label}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.singleImageContainer}>
          <img src={data.img} alt={data.title} className={styles.singleImg} />
        </div>
      )}

      <a href="#" className={styles.linkText}>{data.linkText}</a>
    </div>
  );
};

export default ProductCard;

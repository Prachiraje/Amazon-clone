import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductGrid.module.css';

const MOCK_PRODUCTS = [
  {
    id: 1,
    title: "Up to 60% off | Styles for men",
    type: "grid",
    items: [
      { img: "https://m.media-amazon.com/images/I/71R2o58sKwL._AC_UL480_FMwebp_QL65_.jpg", label: "Clothing" },
      { img: "https://m.media-amazon.com/images/I/61sJ2f+-X3L._AC_UL480_FMwebp_QL65_.jpg", label: "Footwear" },
      { img: "https://m.media-amazon.com/images/I/61-RkG6iN4L._AC_UL480_FMwebp_QL65_.jpg", label: "Watches" },
      { img: "https://m.media-amazon.com/images/I/71oXmHlYkcL._AC_UL480_FMwebp_QL65_.jpg", label: "Bags" }
    ],
    linkText: "End of season sale"
  },
  {
    id: 2,
    title: "Revamp your home in style",
    type: "grid",
    items: [
      { img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_furnishings_2._SY116_CB584596691_.jpg", label: "Cushion covers" },
      { img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_storage_1._SY116_CB584596691_.jpg", label: "Vasess" },
      { img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_decor_1._SY116_CB584596691_.jpg", label: "Decor" },
      { img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_lighting_2._SY116_CB584596691_.jpg", label: "Lighting" }
    ],
    linkText: "Explore all"
  },
  {
    id: 3,
    title: "Starting ₹149 | Headphones",
    type: "single",
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/MI/Gw/boat_desktop_CC_1x._SY304_CB570222129_.jpg",
    linkText: "Shop now"
  },
  {
    id: 4,
    title: "Sign in for your best experience",
    type: "signin"
  },
  {
    id: 5,
    title: "Automotive essentials",
    type: "grid",
    items: [
      { img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg", label: "Cleaning" },
      { img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg", label: "Helmets" },
      { img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg", label: "Vacuum" },
      { img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1x._SY116_CB410830552_.jpg", label: "Glass care" }
    ],
    linkText: "See more"
  },
  {
    id: 6,
    title: "Up to 50% off | Monitor setups",
    type: "single",
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg",
    linkText: "Shop the collection"
  },
  {
    id: 7,
    title: "Explore everyday essentials",
    type: "single",
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/QC1_PC_372._SY232_CB616035209_.jpg",
    linkText: "Shop now"
  },
  {
    id: 8,
    title: "Laptops for every need",
    type: "single",
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img15/Lap/Gw/Desk_CC_372x232_lap._SY232_CB610484558_.jpg",
    linkText: "Find your laptop"
  }
];

const ProductGrid = () => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.grid}>
        {MOCK_PRODUCTS.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;

import React from "react";
import styles from "./MainPage.module.scss";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h3>Header</h3>
        <Link to="/signup">Signup</Link>
      </div>
      <div className={styles.categories}>
        <div>Laptops</div>
        <div>Phones</div>
        <div>Headphones</div>
        <div>Watches</div>
        <div>Others</div>
      </div>
    </div>
  );
};

export default MainPage;

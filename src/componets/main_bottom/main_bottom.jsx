import React from "react";
import styles from './main_bottom.module.css';

const MainBottom = (props) => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}><img src="" alt="사진"/></li>
      <li className={styles.item}><img src="" alt="사진"/></li>
      <li className={styles.item}><img src="" alt="사진"/></li>
    </ul>
  );
};
export default MainBottom;

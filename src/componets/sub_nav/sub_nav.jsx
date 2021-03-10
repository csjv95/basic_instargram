import React from 'react';
import styles from './sub_nav.module.css';

const SubNav = (props) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.posts}>게시물</li>
        <li>IGTV</li>
        <li>저장됨</li>
      <li>태그됨</li>
      </ul>
    </nav>
  )
}

export default SubNav;
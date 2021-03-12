import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./sub_nav.module.css";

const SubNav = (props) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <NavLink exact to="/my">
          <li>게시물</li>
        </NavLink>
        <NavLink exact to="/my/channel">
          <li>IGTV</li>
        </NavLink>
        <NavLink exact to="/my/saved">
          <li>저장됨</li>
        </NavLink>
        <NavLink exact to="/my/taged">
          <li>태그됨</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default SubNav;

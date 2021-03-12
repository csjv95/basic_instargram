import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <a href="/home" className={styles.logo}>
        Outstargram
      </a>
      <input className={styles.search} type="text" placeholder="검색"></input>

      <nav>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink exact to="/home">
              홈
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink exact to="/message">
              DM
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink exact to="/direction">
              탐색
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink exact to="/heart">
              좋아요
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink exact to="/my">
              my
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;

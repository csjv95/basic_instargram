import React from "react";
import { BrowserRouter, Link, NavLink, Route, Switch } from "react-router-dom";
import App from "../../app";
import Home from "../home/home";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        Outstargram
      </a>
      <input className={styles.search} type="text" placeholder="검색">
        
      </input>

      <BrowserRouter>
      <nav>
        <ul className={styles.list}>
          <li className={styles.item}><Link exact to="/">home</Link></li>
          <li className={styles.item}><NavLink exact to="/message">message</NavLink></li>
          <li className={styles.item}><NavLink exact to="/direction">direction</NavLink></li>
          <li className={styles.item}><NavLink exact to="/heart">heart</NavLink></li>
          <li className={styles.item}><NavLink exact to="/my">my</NavLink></li>
        </ul>
      </nav>

      
      </BrowserRouter>

      
    </header>
  );
};
export default Header;

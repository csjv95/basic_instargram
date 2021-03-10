import React from "react";
import { BrowserRouter, Link, NavLink, Route, Switch } from "react-router-dom";
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
          <li className={styles.item}><Link exact to="/home">홈</Link></li>
          <li className={styles.item}><NavLink exact to="/message">DM</NavLink></li>
          <li className={styles.item}><NavLink exact to="/direction">탐색</NavLink></li>
          <li className={styles.item}><NavLink exact to="/heart">좋아요</NavLink></li>
          <li className={styles.item}><NavLink exact to="/my">my</NavLink></li>
        </ul>
      </nav>

      <Switch >
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
      </BrowserRouter>

      
    </header>
  );
};
export default Header;

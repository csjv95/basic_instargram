import React from "react";
import styles from "./footer.module.css";

const Footer = ({ getUser }) => {
  return (
    <footer>
      <ul className={styles.info_company}>
        <li>소개</li>
        <li>블로그</li>
        <li>채용 정보</li>
        <li>도움말</li>
        <li>API</li>
        <li>개인정보처리방침</li>
        <li>약관</li>
        <li>인기 계정</li>
        <li>해시태그</li>
        <li>위치</li>
      </ul>

      <ul className={styles.copy_right}>
        <li>
          <select>
            <option value="korean">한국어</option>
            <option value="english">english</option>
          </select>
        </li>
        <li>© 2021 Outstagram from SJ</li>
      </ul>
    </footer>
  );
};

export default Footer;

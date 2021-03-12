import React from "react";
import styles from "./footer.module.css";

const Footer = ({ getUser }) => {
  return (
    <footer>
      <ul className={styles.info_company}>
        <li><button>소개</button></li>
        <li><button>블로그</button></li>
        <li><button>채용정보</button> </li>
        <li><button>도움말</button></li>
        <li><button>API</button></li>
        <li><button>개인정보처리방침</button></li>
        <li><button>약관</button></li>
        <li><button>인기계정</button> </li>
        <li><button>해시태그</button></li>
        <li><button>위치</button></li>
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

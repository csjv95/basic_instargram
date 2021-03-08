import React from "react";
import styles from "./main_top.module.css";

const MainTop = (props) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/56593842_427595071141963_9102473363216924672_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=cfdnlqZ9gncAX_AJaub&oh=db7d3b3bbc650dd0524dfc334e798e1b&oe=606DE27C" alt="me" />
      <div className={styles.information}>
        <div className={styles.title}>
          <h2>idName</h2>
          <button>프로필 편집</button>
          <span>서클</span>
        </div>
        <ul className={styles.list}>
          <li>
            게시물 <span>0</span>
          </li>
          <li>
            팔로워 <span>0</span>
          </li>
          <li>
            팔로우 <span>0</span>
          </li>
        </ul>
        <div>
          <span>idName</span>
          <span>종류</span>
          <p>disciption</p>
        </div>
      </div>
    </div>
  );
};

export default MainTop;

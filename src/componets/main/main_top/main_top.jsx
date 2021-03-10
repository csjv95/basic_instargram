import React from "react";
import styles from "./main_top.module.css";

const MainTop = ({ userName }) => {
  return (
    <section className={styles.container}>
      <img
        className={styles.profile_img}
        src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/56593842_427595071141963_9102473363216924672_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=cfdnlqZ9gncAX_AJaub&oh=db7d3b3bbc650dd0524dfc334e798e1b&oe=606DE27C"
        alt="me"
      />

      <div className={styles.information}>
        <div className={styles.top}>
          <h2 className={styles.my}>{userName}</h2>
          <button>프로필 편집</button>
          <button>서클</button>
        </div>
        <ul className={styles.midle}>
          <li>
            게시물 <span>15</span>
          </li>
          <li>
            팔로워 <span>76</span>
          </li>
          <li>
            팔로우 <span>30</span>
          </li>
        </ul>
        <div className={styles.bottom}>
          <h3>{userName}</h3>
          <span>카페</span>
          <p>
            수원 광교 이쁜카페<br/>
            "수제 젤라또 & 그릭요거트"<br />
             오픈 12:00 ~ 마감 <br/>
            12:00 T 031-213-7008
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainTop;

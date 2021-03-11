import React from "react";
import MediaDetail from "../media_detail/media_detail";
import styles from './main_bottom.module.css';

const MainBottom = ({userMedia}) => {
  return (
    <ul className={styles.list}>
      {userMedia.map(media => <MediaDetail key={media.id} media={media}/>)}
    </ul>
  );
};
export default MainBottom;

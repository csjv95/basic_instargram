import React from 'react';
import styles from './media_detail.module.css';

const MediaDetail = ({media}) => {
  return(
    <li className={styles.img_container}><img className={styles.img} src={media.media_url} alt=""/></li>
  )
}

export default MediaDetail;
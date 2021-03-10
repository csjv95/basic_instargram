import React from 'react';
import MainBottom from '../main_bottom/main_bottom';
import SubNav from '../sub_nav/sub_nav';
import styles from './main.module.css';
import MainTop from './main_top/main_top';

const Main = ({videoId}) => {
  return(
    <main className={styles.main}>
    <section className={styles.top}>
      <MainTop videoId={videoId} />
    </section>
    <SubNav />
    <section className={styles.botom}>
      <MainBottom />
    </section>
    </main>
  )
}

export default Main;
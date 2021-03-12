import React from 'react';
import SubRouter from '../../router/sub_router';
import SubNav from '../sub_nav/sub_nav';
import styles from './main.module.css';
import MainTop from './main_top/main_top';

const Main = ({userName, userMedia}) => {
  return(
    <main className={styles.main}>
    <section className={styles.top}>
      <MainTop userName={userName} />
    </section>
    <SubNav />
    <section className={styles.botom}>
      <SubRouter userMedia={userMedia} />
    </section>
    </main>
  )
}

export default Main;
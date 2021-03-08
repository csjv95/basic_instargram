import React from 'react';
import styles from './main.module.css';
import MainTop from './main_top/main_top';

const Main = (props) => {
  return(
    <main className={styles.main}>
    <section className={styles.top}>
      <MainTop />
    </section>
    <section className={styles.botom}>
      
    </section>
    </main>
  )
}

export default Main;
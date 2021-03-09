import "./app.module.css";
import Footer from "./componets/footer/footer";
import Header from "./componets/header/header";
import Main from "./componets/main/main";
import styles from './app.module.css';
import { useEffect, useState } from "react";
import axios from "axios";

function App({getUserName}) {
  const [videoId,setVideoId] = useState([]);

  
  useEffect(()=> {
    getUserName.userName().then(item => setVideoId(item))
  },[getUserName])

  return (
    <div className={styles.container}>
      <Header />
      <Main videoId={videoId}/>
      <Footer />
    </div>
  );
}
export default App;

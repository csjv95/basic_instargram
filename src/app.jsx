import "./app.module.css";
import Footer from "./componets/footer/footer";
import Header from "./componets/header/header";
import Main from "./componets/main/main";
import styles from './app.module.css';
import { useEffect, useState } from "react";


function App({getUserData}) {
  const [userName,setUserName] = useState([]);
  const [userVideoId,setUserVideoId] =useState([]);
  
  useEffect(()=> {
    getUserData.userName().then(item => setUserName(item))
  },[getUserData])

  useEffect(()=> {
    getUserData.userVideoId().then(item => console.log(item))
  },[getUserData])

 

  return (
    <div className={styles.container}>
      <Header />
      <Main userName={userName}/>
      <Footer />
    </div>
  );
}
export default App;

import "./app.module.css";
import Footer from "./componets/footer/footer";
import Header from "./componets/header/header";
import styles from "./app.module.css";
import { useEffect, useState } from "react";
import MainRouter from "./router/main_router";

function App({ getUserData }) {
  const [userName, setUserName] = useState([]);
  const [userMedia, setUserMedia] =useState([]);

  useEffect(() => {
    getUserData.userName().then((item) => setUserName(item));
  }, [getUserData]);

  useEffect(()=> {
    getUserData.userMedia().then(data => setUserMedia(data))
  },[getUserData])


  return (
    <div className={styles.container}>
      <Header />
      <MainRouter userName={userName} userMedia={userMedia}/>
      <Footer />
    </div>
  );
}
export default App;

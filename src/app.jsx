import "./app.module.css";
import Footer from "./componets/footer/footer";
import Header from "./componets/header/header";
import Main from "./componets/main/main";
import styles from "./app.module.css";
import { useEffect, useState } from "react";

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
      <Main userName={userName} userMedia={userMedia}/>
      <Footer />
    </div>
  );
}
export default App;

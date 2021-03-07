import "./app.module.css";
import Footer from "./componets/footer/footer";
import Header from "./componets/header/header";
import Main from "./componets/main/main";
import styles from './app.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
export default App;

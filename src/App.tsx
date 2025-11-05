import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import styles from './App.module.css';
import Footer from './components/Footer';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.shell}>
        <Header />
        <About />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

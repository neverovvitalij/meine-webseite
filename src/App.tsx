import styles from './App.module.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.container}></div>
    </BrowserRouter>
  );
}

export default App;

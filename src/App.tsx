import styles from './App.module.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;

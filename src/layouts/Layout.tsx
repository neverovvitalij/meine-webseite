import { Outlet, NavLink } from 'react-router-dom';
import styles from '../styles/Layout.module.css';

const Layout = (): React.JSX.Element => {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <NavLink to="/">
            NEVEROV
            <br />
            VITALIJ
          </NavLink>
        </div>
        <nav className={styles.nav}>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </nav>
      </header>

      <main className={styles.main}>
        <Outlet />
        <h1 className={styles.title}>
          FULL-STACK
          <br />
          DEVELOPER
        </h1>
        <p className={styles.subtitle}>
          I build web applications
          <br />
          using modern technologies
        </p>
      </main>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} Neverov Vitalij
      </footer>
    </div>
  );
};

export default Layout;

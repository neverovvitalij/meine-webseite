import { NavLink } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const Header = (): React.JSX.Element => {
  return (
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
  );
};

export default Header;

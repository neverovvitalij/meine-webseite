import { NavLink } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import { useState } from 'react';

const Header = (): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <NavLink to="/">
          NEVEROV
          <br />
          VITALIJ
        </NavLink>
      </div>

      <nav
        className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}
        id="main-nav"
      >
        <NavLink to="/about">About</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <button
        type="button"
        className={`${styles.burger} ${isOpen ? styles.burgerOpen : ''}`}
        aria-controls="main-nav"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
      </button>
    </header>
  );
};

export default Header;

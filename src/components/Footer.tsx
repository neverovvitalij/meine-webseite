import styles from '../styles/Footer.module.css';

const Footer = (): React.JSX.Element => {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} Neverov Vitalij
    </footer>
  );
};

export default Footer;

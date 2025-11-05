import styles from '../styles/About.module.css';

const About = (): React.JSX.Element => {
  return (
    <main className={styles.main}>
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
  );
};

export default About;

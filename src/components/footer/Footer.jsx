import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Atish</div>
      <div className={styles.text}>
      Innovative Tech Insights © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;

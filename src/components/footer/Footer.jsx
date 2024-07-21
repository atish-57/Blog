import styles from "./footer.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Atish</div>
      <div className={styles.icons}>
        <a href="https://github.com/atish-57" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/atish-ranjan-3bab84251/" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <LinkedInIcon />
        </a>
      </div>
      <div className={styles.text}>
        Innovative Tech Insights © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;

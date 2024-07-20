import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";

export const metadata = {
  title: "Home",
  description: "Learn more about Innovative Tech Insights, our mission, and our expertise in the tech industry.",
};

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Innovative Tech Insights</h1>
        <p className={styles.desc}>
          Dive into the latest in tech innovation with Atish. Explore cutting-edge projects, expert insights, and creative solutions.
        </p>
        <div className={styles.buttons}>
          <Link href="/about">
            <button className={`${styles.button} ${styles.learnMoreButton}`}>Learn More</button>
          </Link>
          <Link href="/contact">
            <button className={`${styles.button} ${styles.contactButton}`}>Contact</button>
          </Link>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="Brands" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="Hero" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;

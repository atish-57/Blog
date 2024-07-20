import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Us ",
  description: "Learn more about Innovative Tech Insights, our mission, and our expertise in the tech industry.",
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Us</h2>
        <h1 className={styles.title}>
          Pioneering the Future of Technology
        </h1>
        <p className={styles.desc}>
          At Innovative Tech Insights, we push the boundaries of what is  possible in the tech world. Our mission is to deliver groundbreaking ideas and solutions that are smarter, faster, and more efficient. We excel in delivering top-tier web and software development services, backed by years of experience and a commitment to excellence.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>15+</h1>
            <p>Years of Experience</p>
          </div>
          <div className={styles.box}>
            <h1>200+</h1>
            <p>Projects Completed</p>
          </div>
          <div className={styles.box}>
            <h1>50+</h1>
            <p>Expert Team Members</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          alt="About Image"
          fill
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default AboutPage;


import Image from "next/image";
import styles from "./contact.module.css";
import Contactform from "@/components/contactForm/Contactform";


export const metadata = {
  title: "Contact Us",
  description: "this is contact us page  ",
};


const ContactPage = () => {

  return (

    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <Contactform />
      </div>
    </div>
  );
};

export default ContactPage;

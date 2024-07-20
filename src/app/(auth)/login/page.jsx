import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin } from "@/lib/action";
import { FaGithub } from "react-icons/fa";
import styles from "./login.module.css";

export const metadata = {
  title: "Login",
  description: "Login to Dive into Tech Blogs",
};


const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>
            <FaGithub />
            Login with GitHub
          </button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;

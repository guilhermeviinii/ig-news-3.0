import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

export function SignInButton() {
  const isLoggedIn = true;

  return isLoggedIn ? (
    <button className={styles.sigInButton} type="button">
      <FaGithub color="#04d361" />
      Guilherme Vinicius
      <FiX className={styles.closeIcon} color="#737380" />
    </button>
  ) : (
    <button className={styles.sigInButton} type="button">
      <FaGithub color="#eba417" /> Sign in with Github{" "}
    </button>
  );
}

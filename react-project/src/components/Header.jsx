import styles from "./Header.module.css";
import symbol from "../assets/symbol.svg";

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <img src={symbol} alt="" />
        <strong>Ignite Feed</strong>
      </header>
    </>
  );
}

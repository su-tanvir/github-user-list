import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.root}>
      <h1 className={styles.title}>
        <em>Github user list</em>
      </h1>
    </header>
  );
}

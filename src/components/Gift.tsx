import styles from "../styles/Gift.module.css";

export default function Gift() {
  return (
    <div className={styles.gift}>
      <div className={styles.cover}></div>
      <div className={styles.giftBody}></div>

      <div className={styles.bowCover}></div>
      <div className={styles.bowBody}></div>
    </div>
  );
}

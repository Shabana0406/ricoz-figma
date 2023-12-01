import styles from "./Feature.module.css";

function Feature({ src, title, text }) {
  return (
    <div className={styles.feature}>
      <div className={styles.featureImage}>
        <span className={styles.featureIconContainer}>
          <img src={src} alt="pc" />
        </span>
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default Feature;

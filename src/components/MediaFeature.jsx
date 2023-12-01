import styles from "./MediaFeature.module.css";

function MediaFeature({ src, title, text }) {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <img src={src} alt="media-icon" />
      </div>

      <div className={styles.mediaInfo}>
        <div className={styles.mediaInfoText}>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default MediaFeature;

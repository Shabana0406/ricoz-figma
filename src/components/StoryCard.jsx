import styles from "./StoryCard.module.css";
import star from "../assets/star.png";

function StoryCard({ src, name, title, text, stage }) {
  return (
    <div className={styles.storyCard}>
      <div className={styles.storyHead}>
        <div className={styles.image}>
          <img src={src} alt=" story" />
        </div>
        <div>
          <h3>{name}</h3>
          <h4>{stage}</h4>
        </div>
      </div>

      <div className={styles.storyBody}>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className={styles.ratings}>
          <span>
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default StoryCard;

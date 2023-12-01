import Feature from "./Feature";
import service from "../assets/laptop-computer.svg";
import search from "../assets/search-bar.svg";
import quality from "../assets/bag.svg";
import chevron1 from "../assets/chevron-right.svg";
import chevron2 from "../assets/chevron-left.svg";
import styles from "./UniqueFeature.module.css";

function UniqueFeature() {
  return (
    <div className={styles.featureSection}>
      <div className={styles.featureHeader}>
        <h2>Explore Our Platform's Unique Features</h2>
        <div className={styles.iconContainer}>
          <span className={styles.icon}>
            <img src={chevron1} alt="chevron" />
          </span>
          <span className={styles.icon}>
            <img src={chevron2} alt="chevron" />
          </span>
        </div>
      </div>

      <div className={styles.featureContainer}>
        <Feature
          src={service}
          title="Wide Range of Services "
          text="Find everything from web development to marketing under one roof. Our platform offers a diverse array of tech services"
        />

        <Feature
          src={search}
          title="Instant Search"
          text="Get connected to top tech professionals within moments. Our intuitive search function ensures quick access."
        />

        <Feature
          src={quality}
          title="Quality Scoring"
          text="We maintain high service standards. Our unique scoring system ensures you receive top-notch quality from professionals."
        />
      </div>
    </div>
  );
}

export default UniqueFeature;

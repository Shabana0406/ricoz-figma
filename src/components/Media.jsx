import media from "../assets/media.png";
import network from "../assets/network.png";
import trust from "../assets/trust.png";
import effort from "../assets/effort.png";
import time from "../assets/time.png";
import styles from "./Media.module.css";
import MediaFeature from "./MediaFeature";

function Media() {
  return (
    <div className={styles.mediaSection}>
      <div className={styles.header}>
        <h2>Why Choose Ricoz?</h2>
      </div>

      <div className={styles.media}>
        <div className={styles.mediaImage}>
          <img src={media} alt="media" />
        </div>

        <div className={styles.mediaBody}>
          <MediaFeature
            src={network}
            title="Vast Professional Network"
            text="Access a wide range of skilled tech professionals, all in one platform."
          />
          <MediaFeature
            src={trust}
            title="Quality You Can Trust"
            text="Our stringent quality scoring system ensures that you receive exceptional services."
          />
          <MediaFeature
            src={effort}
            title="Effortless Collaboration"
            text="Our integrated tools facilitate seamless communication and collaboration"
          />
          <MediaFeature
            src={time}
            title="Save Time and Effort"
            text="With our platform, finding professionals and managing projects becomes effortless."
          />
        </div>
      </div>
    </div>
  );
}

export default Media;

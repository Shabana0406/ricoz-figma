import Button from "../ui/Button";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerText}>
        <h1>Discover Top Tech Professionals in Minutes.</h1>
        <p>
          Streamline Your Business Needs with Ricoz's All-in-One Tech Service
          Hub.
        </p>

        <div className={styles.btn}>
          <Button type="btnSecondary">get started</Button>
        </div>
      </div>

      <div className={styles.headerImage}>
        <div className={styles.headerImageBig}>
          <img src={hero1} alt="hero1" />
        </div>

        <div className={styles.headerImageSmall}>
          <img src={hero2} alt="hero2" />
        </div>
      </div>
    </div>
  );
}

export default Header;

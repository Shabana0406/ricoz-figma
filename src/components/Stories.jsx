import StoryCard from "./StoryCard";
import john from "../assets/john.png";
import alice from "../assets/alice.png";
import sophia from "../assets/sophia.png";
import styles from "./Stories.module.css";

function Stories() {
  return (
    <div className={styles.storySection}>
      <h2 className={styles.headline}>Real Stories from Real Professionals</h2>

      <div className={styles.cards}>
        <StoryCard
          src={john}
          name="John Doe"
          stage="Graduated"
          title="I recommend this to All"
          text="Ricoz connected me with amazing clients. The quality scoring system ensures I work on exciting projects while maintaining my reputation."
        />

        <StoryCard
          src={alice}
          name="Alice Smith"
          stage="Ui/UX designer  "
          title="The Support is Awesome"
          text="As a freelancer, Ricoz's instant search feature saves me time. It's a one-stop platform for all my degital marketing needs."
        />

        <StoryCard
          src={sophia}
          name="Sophia Miller"
          stage="Student"
          title="A Game Changer For Us"
          text="I've learned and earned on Ricoz. The courses are well-designed, and the integrated tools streamline communication with clients."
        />
      </div>
    </div>
  );
}

export default Stories;

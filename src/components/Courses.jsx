import Button from "../ui/Button";
import Course from "./Course";
import web from "../assets/web-development.png";
import digital from "../assets/digital-marketing.png";
import graphic from "../assets/graphic-design.png";
import styles from "./Courses.module.css";

function Courses() {
  return (
    <div className={styles.courseSection}>
      <div className={styles.courseHeader}>
        <div className={styles.courseHeaderText}>
          <h2>Unlock New Skills with Our Courses</h2>
          <p>Learn and Grow at Your Own Pace.</p>
        </div>
        <Button className={styles.btn} type="btnSecondary">
          explore more
        </Button>
      </div>

      <div className={styles.card}>
        <Course
          src={web}
          title="Web Development Mastery"
          amount="₹ 60,000"
          text="Master the art of web development with our comprehensive course. Learn coding, design, and deployment. "
        />

        <Course
          src={digital}
          title="Digital Marketing Fundamentals"
          amount="₹ 80,000"
          text="Navigate the Digital Landscape. Explore the world of digital marketing. Acquire skills in SEO, social media, and online advertising."
        />

        <Course
          src={graphic}
          title="Graphic Design Fundamentals"
          amount="₹ 60,000"
          text="Unleash your creativity with graphic design. Learn layout, typography, and visual communication."
        />
      </div>
    </div>
  );
}

export default Courses;

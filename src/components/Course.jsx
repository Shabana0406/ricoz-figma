import styles from "./Course.module.css";

function Course({ src, title, amount, text }) {
  return (
    <div className={styles.courseCard}>
      <div className={styles.courseHead}>
        <img src={src} alt="card" />
      </div>

      <div className={styles.courseBody}>
        <h3>{title}</h3>
        <h4>{amount}</h4>
        <p>{text}</p>
        <span>
          <a href="#link">learn more &rarr;</a>
        </span>
      </div>
    </div>
  );
}

export default Course;

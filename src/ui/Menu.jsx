import styles from "./Menu.module.css";

function Menu() {
  return (
    <div className={styles.menu}>
      <p>
        <a href="#about">about us</a>
      </p>
      <p>
        <a href="#service">services</a>
      </p>
      <p>
        <a href="#cource">courses</a>
      </p>
      <p>
        <a href="#contact">contact</a>
      </p>
    </div>
  );
}

export default Menu;

import styles from "./Input.module.css";

function Input({ name, width }) {
  return (
    <div className={styles.input}>
      <h3>{name}</h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height="2"
        viewBox="0 0 637 2"
        fill="none"
      >
        <path d="M0.0145264 1H679.515" stroke="white" />
      </svg>
    </div>
  );
}

export default Input;

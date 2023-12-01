import styles from "./ToolType.module.css";

function ToolType({ src, title, text }) {
  return (
    <div className={styles.toolType}>
      <img src={src} alt="tool-type" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default ToolType;

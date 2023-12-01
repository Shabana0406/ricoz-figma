import styles from "./ContactVia.module.css";

function ContactVia({ src, text }) {
  return (
    <div className={styles.contactVia}>
      <div className={styles.container}>
        <img src={src} alt="contact-via" />
      </div>
      <span>{text}</span>
    </div>
  );
}

export default ContactVia;

import styles from "./Contact.module.css";
import contact from "../assets/contactImage.png";
import Input from "./Input";
import Button from "../ui/Button";
import ContactVia from "./ContactVia";
import telephone from "../assets/telephone.png";
import gmail from "../assets/gmail.png";
import insta from "../assets/insta.png";
import Line from "../ui/Line";

function Contact() {
  return (
    <div className={styles.contactSection}>
      <div className={styles.contact}>
        <image>
          <img src={contact} alt="contact" />
        </image>

        <div className={styles.contactInfo}>
          <div>
            <h2>Get in Touch</h2>
          </div>

          <Input name="name" width="637" />

          <div className={styles.email}>
            <Input name="email" width="320" />
            <Input name="phone number" width="320" />
          </div>
          <Input name="message" width="637" />

          <div className={styles.submit}>
            <Button type="btnPrimary">submit now</Button>
          </div>
        </div>
      </div>

      <div className={styles.contactThrough}>
        <Line />
        <div className={styles.contactIcon}>
          <ContactVia src={telephone} text="+91-7011112666" />
          <ContactVia src={gmail} text="info@Ricoz.in " />
          <ContactVia src={insta} text="Ricoz.in " />
        </div>
      </div>
    </div>
  );
}

export default Contact;

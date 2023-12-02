import Logo from "../ui/Logo";
import FooterList from "./FooterList";
import styles from "./Footer.module.css";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import spotify from "../assets/spotify.svg";
import arrow from "../assets/arrow.svg";
import Line from "../ui/Line";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSection}>
        <Logo />

        <FooterList
          title="Company"
          t1="About Us"
          t2="Services"
          t3="Courses"
          t4="Contact us"
        />

        <FooterList
          title="Services"
          t1="Web Development"
          t2="Performance Marketing"
          t3="Social Media Marketing"
          t4="App Development"
          t5="Graphic Design"
          t6="UI/UX Design"
        />

        <div className={styles.items}>
          <div>
            <h2>Email Us</h2>
            <p>Ricoz1234@gmail.com</p>
          </div>

          <div>
            <h2>Contact Us</h2>
            <p>+91 9098885099</p>
          </div>

          <div className={styles.footerIcon}>
            <span>
              <img src={facebook} alt="facebook" />
            </span>
            <span>
              <img src={twitter} alt="twitter" />
            </span>
            <span>
              <img src={linkedin} alt="linkedin" />
            </span>
            <span>
              <img src={instagram} alt="instagram" />
            </span>
            <span>
              <img src={spotify} alt="spotify" />
            </span>
          </div>
        </div>

        <div className={styles.subscribe}>
          <h2>SUBSCRIBE TO NEWSLETTER</h2>
          <div className={styles.inputGroup}>
            <div className={styles.searchInput}>
              <span className={styles.search}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M11.872 11.7164L8.60924 8.45366M9.69682 5.73473C9.69682 7.83701 7.99258 9.54124 5.89031 9.54124C3.78803 9.54124 2.0838 7.83701 2.0838 5.73473C2.0838 3.63245 3.78803 1.92822 5.89031 1.92822C7.99258 1.92822 9.69682 3.63245 9.69682 5.73473Z"
                    stroke="white"
                    stroke-width="1.08757"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <input
                className={styles.input}
                placeholder="Enter email "
                type="text"
              />
            </div>
            <div className={styles.arrowIcon}>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.end}>
        <Line />
        <h4>© 2023 Ricoz. All Rights Reserved.</h4>
      </div>
    </footer>
  );
}

export default Footer;

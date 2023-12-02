import styles from "./FooterList.module.css";

function FooterList({ title, t1, t2, t3, t4, t5, t6 }) {
  return (
    <div className={styles.footerList}>
      <h2>{title}</h2>
      <ul>
        <li>
          <a href="#text1">{t1}</a>
        </li>
        <li>
          <a href="#text2">{t2}</a>
        </li>
        <li>
          <a href="#text3">{t3}</a>
        </li>
        <li>
          <a href="#text4">{t4}</a>
        </li>
        <li>
          <a href="#text5">{t5}</a>
        </li>
        <li>
          <a href="#text6">{t6}</a>
        </li>
      </ul>
    </div>
  );
}

export default FooterList;

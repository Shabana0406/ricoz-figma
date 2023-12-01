import Button from "../ui/Button";
import Logo from "../ui/Logo";
import Menu from "../ui/Menu";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.nav}>
      <div>
        <Logo />
      </div>

      <Menu />

      <Button type="btnPrimary">sign up</Button>
    </div>
  );
}

export default Navbar;

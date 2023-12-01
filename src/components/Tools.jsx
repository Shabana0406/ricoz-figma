import ToolType from "./ToolType";
import msgPlatform from "../assets/msgPlatform.png";
import system from "../assets/system.png";
import workshop from "../assets/workshop.png";
import calender from "../assets/calender.png";
import ellipse from "../assets/Ellipse.png";
import styles from "./Tools.module.css";
import Button from "../ui/Button";

function Tools() {
  return (
    <div className={styles.toolSection}>
      <h2>Enhance Your Workflow with Integrated Tools</h2>

      <div className={styles.toolContainer}>
        <ToolType
          className={styles.msgPlatform}
          src={msgPlatform}
          title="Messaging Platform"
          text="Stay connected and collaborate seamlessly with clients and team members."
        />

        <div className={styles.ellipse}>
          <img src={ellipse} alt="ellipse" />
        </div>

        <ToolType
          className={styles.workshop}
          src={workshop}
          title="Collaborative Workspace"
          text="Experience the power of collaboration in our shared workspace together."
        />

        <ToolType
          className={styles.system}
          src={system}
          title="CRM System"
          text="Manage client relationships effectively with our user-friendly CRM system."
        />

        <ToolType
          className={styles.calender}
          src={calender}
          title="Calendar Integration"
          text="Simplify your scheduling and time management with our calendar integration."
        />
      </div>

      <div className={styles.btnTool}>
        <Button type="btnSecondary">explore tools</Button>
      </div>
    </div>
  );
}

export default Tools;

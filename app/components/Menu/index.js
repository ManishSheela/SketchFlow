import { FaPencilAlt, FaEraser } from "react-icons/fa";
import {
  FaArrowRotateLeft,
  FaArrowRotateRight,
  FaDownload,
} from "react-icons/fa6";
import styles from "./index.module.css";
const Menu = () => {
  return (
      <div className={styles.menuContainer}>
          
      <FaPencilAlt className={styles.icons} />

      <FaEraser className={styles.icons} />

      <FaArrowRotateLeft className={styles.icons} />

      <FaArrowRotateRight className={styles.icons} />

      <FaDownload className={styles.icons} />
    </div>
  );
};

export default Menu;

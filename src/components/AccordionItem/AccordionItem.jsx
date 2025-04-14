import { useState } from "react";
import styles from "./AccordionItem.module.css";

const AccordionItem = ({
  title,
  description,
  openAccordion,
  setOpenAccordion,
  accID,
  toggleIconOpen = "-",
  toggleIconClose = "+",
}) => {
  // const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const isAccordionOpen = openAccordion === accID;
  const handleToggleAccordion = () => {
    // setIsAccordionOpen((prev) => !prev);
    setOpenAccordion(isAccordionOpen ? null : accID);
  };

  return (
    <li className={styles.accordion}>
      <header
        className={`${styles.header} ${
          !isAccordionOpen && styles.borderRadiusBottom
        }`}
        onClick={handleToggleAccordion}
      >
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.toggleIcon}>
          {isAccordionOpen ? toggleIconOpen : toggleIconClose}
        </span>
      </header>
      <div
        className={`${styles.descriptionWrapper} ${
          isAccordionOpen ? styles.open : ""
        }`}
      >
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  );
};

export default AccordionItem;

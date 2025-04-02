import { useState } from "react";
import styles from "./AccordionItem.module.css";

const AccordionItem = ({
  title,
  description,
  openAccordion,
  onOpen,
  accID,
}) => {
  // const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const isAccordionOpen = openAccordion === accID;
  const handleToggleAccordion = () => {
    // setIsAccordionOpen((prev) => !prev);
    onOpen(isAccordionOpen ? null : accID);
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
        <span className={styles.toggleIcon}>{isAccordionOpen ? "-" : "+"}</span>
      </header>
      {isAccordionOpen && <p className={styles.description}>{description}</p>}
    </li>
  );
};

export default AccordionItem;

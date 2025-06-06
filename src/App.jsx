import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Input from "./components/Input/Input";
import Modal from "./components/Modal/Modal";
import WeatherWidget from "./components/WeatherWidget/WeatherWidget";
import Spinner from "./components/Spinner/Spinner";
import Counter from "./components/Counter/Counter";
import Button from "./components/Button/Button";
import Accordion from "./components/Accordion/Accordion";
import Stopwatch from "./components/Stopwatch/Stopwatch";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className={styles.rootContainer}>
      {/* {isModalOpen && (
        <Modal title="Information" onClose={() => setIsModalOpen(false)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          maxime. Saepe architecto maxime, repellat fugit ipsa error quasi
          laborum expedita rerum maiores tenetur quod vitae, laudantium
          excepturi obcaecati labore a delectus porro nemo voluptas ullam
          dolorem ea. Commodi cum voluptas, accusamus quas iure voluptatum quia
          repellat quam id adipisci numquam?
        </Modal>
      )} */}
      {/* <Button />
      <Counter />
      <Input /> */}
      {/* <Accordion /> */}
      {/* <Spinner /> */}
      {/* <WeatherWidget /> */}
      <Stopwatch />
    </div>
  );
}

export default App;

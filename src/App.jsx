import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Input from "./components/Input/Input";
useEffect;
function App() {
  return (
    <div className={styles.rootContainer}>
      <Input
        label="First name"
        placeholder="Enter first name"
        id="firstname"
        error="First name is required!"
      />
      <Input label="Last name" placeholder="Enter last name" id="lastname" />
      <Input label="City" placeholder="Enter city" id="city" />
      <Input label="Zip code" placeholder="Enter zip code" id="zipCode" />
    </div>
  );
}

export default App;

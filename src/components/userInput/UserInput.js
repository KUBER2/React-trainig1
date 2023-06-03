import { useState } from "react";
import styles from "./UserInput.module.css";

const UserInput = (props) => {
  const [ageInput, setAgeState] = useState("");
  const [nameInput, setNameState] = useState("");

  const submitHandller = (e) => {
    e.preventDefault();
    props.addNewUser({ age: ageInput, name: nameInput });
    setAgeState("");
    setNameState("");
  };

  const nameInputHandller = (input) => {
    setNameState(input.target.value);
  };
  const ageInputHandller = (event) => {
    setAgeState(event.target.value);
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={submitHandller} className={styles["form-control"]}>
        <label>Name</label>
        <input
          type="text"
          value={nameInput}
          onChange={nameInputHandller}
        ></input>

        <label>Age</label>
        <input
          type="number"
          step="1"
          min="0"
          value={ageInput}
          onChange={ageInputHandller}
        ></input>

        <button type="submit">Add Goal</button>
      </form>
    </div>
  );
};

export default UserInput;

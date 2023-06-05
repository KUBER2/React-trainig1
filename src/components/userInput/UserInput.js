import { useState } from "react";
import styles from "./UserInput.module.css";

import ErrorModal from "../UI/ErrorModal";
import Card from "../UI/Card";

const validateAge = (age) => {
  const result =
    Number(age) < 0 ? false : age.trim().lenght === 0 ? false : true;
  return result;
};

const UserInput = (props) => {
  const [ageInput, setAgeState] = useState("");
  const [nameInput, setNameState] = useState("");
  const [error, setError] = useState();

  const dissmisError = () => {
    setError(false);
  };

  const submitHandller = (e) => {
    e.preventDefault();
    if (!validateAge(ageInput)) {
      //console.log(ageInput + " age must be grater then 0!");
      setError({ msg: "Non valid input", title: "Error" });
      return;
    }
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
    <div>
      {error && (
        <ErrorModal
          onConfirm={dissmisError}
          title={error.title}
          message={error.msg}
        ></ErrorModal>
      )}
      <Card>
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
            value={ageInput}
            onChange={ageInputHandller}
          ></input>

          <button type="submit">Add Goal</button>
        </form>
      </Card>
    </div>
  );
};

export default UserInput;

import { useState } from "react";
import "./App.css";

import UsersList from "./components/users/UsersList";
import UserInput from "./components/userInput/UserInput";

const initialUsersList = [
  { name: "Adam", age: 31, id: 1 },
  { name: "Max", age: 27, id: 2 },
];

function App() {
  const [userList, updateUserList] = useState(initialUsersList);

  const addNewUser = (userData) => {
    updateUserList((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({
        name: userData.name,
        age: userData.age,
        id: userList.length + 1,
      });
      return updatedUsers;
    });
  };
  return (
    <div className="App">
      <UserInput addNewUser={addNewUser}></UserInput>
      <UsersList data={userList}></UsersList>
    </div>
  );
}

export default App;

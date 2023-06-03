import { useState } from "react";
import "./App.css";

import UsersList from "./components/users/UsersList";

const initialUsersList = [
  { name: "Adam", age: 31, id: 1 },
  { name: "Max", age: 27, id: 2 },
];

function App() {
  const [userList, updateUserList] = useState(initialUsersList);
  return (
    <div className="App">
      <UsersList data={userList}></UsersList>
    </div>
  );
}

export default App;

import UserItemList from "./UserItemList";
import Card from "../UI/Card";

const UsersList = (props) => {
  const userListItems = props.data.map((user) => (
    <UserItemList data={user} key={user.id}></UserItemList>
  ));

  return <Card>{userListItems}</Card>;
};

export default UsersList;

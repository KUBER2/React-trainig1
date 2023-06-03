import styles from "./UsersList.module.css";

import UserItemList from "./UserItemList";

const UsersList = (props) => {
  const userListItems = props.data.map((user) => (
    <UserItemList data={user}></UserItemList>
  ));

  return <div className={styles.usersList}>{userListItems}</div>;
};

export default UsersList;

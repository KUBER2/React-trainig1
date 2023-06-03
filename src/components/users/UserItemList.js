import styles from "./UserItemList.module.css";

const UserItemList = (props) => {
  return (
    <div
      className={styles.UserItem}
    >{`${props.data.name} (${props.data.age} years old)`}</div>
  );
};

export default UserItemList;

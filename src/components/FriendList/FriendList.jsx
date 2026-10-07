import css from "./FriendList.module.css";
import FriendListItem from "../FriendItem/FriendListItem";

function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
}

export default FriendList;
import css from './friendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => {
        console.log('Friend===', friend);
        return (
          <FriendListItem
            id={friend.id}
            name={friend.name}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
}

export default FriendList;

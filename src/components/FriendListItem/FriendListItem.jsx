import clsx from 'clsx';
import css from './friendListItem.module.css';

function FriendListItem({ id, avatar, isOnline, name }) {
  return (
    <li className={css.item} key={id}>
      <span
        //   className={clsx(css.status, isOnline ? css.isOnline : css.isOffline)}
        className={clsx(css.status, {
          [css.isOnline]: isOnline,
          [css.isOffline]: !isOnline,
        })}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

export default FriendListItem;

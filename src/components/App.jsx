// import Wraper from './Wraper/Wraper';
import Profile from './Profile/Profile';
import user from '../user.json';
import Statistics from './Statistics/Statistics';
import statistics from 'statistics.json';
import FriendList from './FriendList/FriendList';
import friends from 'friends.json';

// console.log(user);

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        key={user.username}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>
      <Statistics data={statistics} title="Upload stats" />
      <FriendList friends={friends} />
    </div>
  );
};

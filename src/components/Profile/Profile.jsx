// import PropTypes from 'prop-types';
import css from './profile.module.css';
import Description from 'components/Description/Description';
import UserStats from 'components/UserStats/UserStats';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <Description
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />

      <UserStats stats={stats} />

      {/* <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul> */}
    </div>
  );
};

// Profile.propTypes = {
//   username: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   stats: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//   }),
// };

export default Profile;

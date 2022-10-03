import UserStatsItem from 'components/UserStatsItem/UserStatsItem';
import PropTypes from 'prop-types';

const UserStats = ({ followers, views, likes }) => {
  return (
    <ul className="stats">
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
    </ul>
  );
};

// UserStats.propTypes = {
//   followers: PropTypes.string.isRequired,
//   views: PropTypes.string.isRequired,
//   likes: PropTypes.string.isRequired,
// };

export default UserStats;

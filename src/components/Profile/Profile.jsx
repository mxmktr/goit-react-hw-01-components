import PropTypes from 'prop-types'
import css from '../Profile/Profile.module.css'

export default function Profile({ username, tag, location, avatar, stats}) { 
return (
<div className={css.profile}>
  <div className={css.description}>
          <img src={avatar} alt="User avatar" className={css.avatar } />
            <p className={css.name}>{username}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
  </div>

        <ul className={ css.stats}>
    <li>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{ stats.followers.toLocaleString()}</span>
    </li>
    <li>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{ stats.views.toLocaleString()}</span>
    </li>
    <li>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{ stats.likes.toLocaleString()}</span>
    </li>
  </ul>
</div>
)
}

Profile.propTypes = {
  username: PropTypes.string,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,

      stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      })
}

/* Profile.propTypes = {
  user: PropTypes.exact(
    {
      username: PropTypes.string,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,

      stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }
      )
    })
} */
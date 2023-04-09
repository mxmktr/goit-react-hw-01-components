import PropTypes from 'prop-types'
import css from './FriendListItem.module.css';

export default function FriendListItem({ isOnline, name, avatar }) { 
    return (
        <>
            <span className={isOnline ? css.isOnline : css.isOffline}></span>
            <img className={css.avatar} src={ avatar} alt="User avatar" width="48" />
            <p className={css.name}>{ name}</p>
        </>
    );
}

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string,
    avatar: PropTypes.string,
}
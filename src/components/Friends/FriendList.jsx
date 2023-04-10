import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import css from './FriendList.module.css';

export default function FriendList({ friends }) { 
    return (
        <ul className={ css.friendList}>
            {friends.map(({id, isOnline, name, avatar}) => { 
                return (
                    <FriendListItem key={ id} isOnline={ isOnline} name={ name} avatar={ avatar} />
                );
            })}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact(
        {
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            name: PropTypes.string,
            avatar: PropTypes.string,
        })
    ),
}
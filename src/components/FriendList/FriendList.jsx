import friendStyles from "./FriendList.module.css"
import FriendListItem from "../FriendListItem/FriendListItem"

const FriendList = ({friends}) => {
  return (
    <ul className={friendStyles.friendList}>
      {friends.map((friend) => {
        return <li className={friendStyles.friendListItem} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      })}
		</ul>
  )
}

export default FriendList
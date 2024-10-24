import friendListItemStyles from "./FriendListItem.module.css"

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={friendListItemStyles.card}>
          <img src={avatar} alt="Avatar" width="48" className={friendListItemStyles.avatar} />
          <p className={friendListItemStyles.name}>{name}</p>
          {isOnline ? <p className={friendListItemStyles.Online}>Online</p> : <p className={friendListItemStyles.Offline}>Offline</p>}
          
    </div>
  )
}

export default FriendListItem
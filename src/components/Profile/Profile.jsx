import profileStyles from "./Profile.module.css"

const Profile = ({ name, tag, location, image, stats }) => {
  return (
<div className={profileStyles.profile}>
  <div className={profileStyles.card}>
        <img
      className={profileStyles.photo}
      src={image}
      alt="User avatar"
    />
    <p className={profileStyles.name}>{name}</p>
    <p className={profileStyles.tag}>@{tag}</p>
        <p className={profileStyles.tag}>{location}</p>
  </div>

  <ul className={profileStyles.list}>
    <li className={profileStyles.item}>
      <span className={profileStyles.itemTitle}>Followers</span>
      <span className={profileStyles.itemValue}>{stats.followers}</span>
    </li>
    <li className={profileStyles.item}>
      <span className={profileStyles.itemTitle}>Views</span>
      <span className={profileStyles.itemValue}>{stats.views}</span>
    </li>
    <li className={profileStyles.item}>
      <span className={profileStyles.itemTitle}>Likes</span>
      <span className={profileStyles.itemValue}>{stats.likes}</span>
    </li>
  </ul>
</div>
)
}

export default Profile
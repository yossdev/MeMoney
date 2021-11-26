import Avatar from '../NavBar/components/Avatar'

const ProfileDropdown = () => {
  return (
    <div>
      <div>
        <Avatar />
        <h2 className="text-BlackGrey1">User Name</h2>
      </div>
      <hr className="bg-BlackGrey1" />
      <h2 className="text-BlackGrey2">Profile</h2>
      <button type="button" className="bg-Red1 text-WhiteBG1">
        Sign Out
      </button>
    </div>
  )
}

export default ProfileDropdown

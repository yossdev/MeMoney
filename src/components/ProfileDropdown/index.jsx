import Avatar from '../NavBar/components/Avatar'
import SignOut from '../../OAuth/SignOut'

const ProfileDropdown = () => {
  return (
    <div className="bg-WhiteBG1 shadow-lg border-md w-52 rounded-lg fixed">
      <div className="flex p-4 items-center">
        <div>
          <Avatar />
        </div>
        <h2 className="text-BlackGrey1 px-3 font-semibold">Tokyo</h2>
      </div>
      <hr className="bg-BlackGrey1 h-0.5" />
      <div className="grid justify-items-center py-2.5">
        <h2 className="text-BlackGrey1 font-semibold py-2">Profile</h2>
        <SignOut />
      </div>
    </div>
  )
}

export default ProfileDropdown

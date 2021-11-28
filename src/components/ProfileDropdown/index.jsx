import { Link } from 'react-router-dom'

import Avatar from '../NavBar/components/Avatar'

const ProfileDropdown = ({ auth }) => {
  const { isAuthenticated, logout } = auth

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
        <Link to="profile">
          <h2 className="text-BlackGrey1 font-semibold py-2">Profile</h2>
        </Link>
        {isAuthenticated && (
          <button
            type="button"
            className="bg-Red1 px-2.5 py-1 my-2.5 text-WhiteBG1 rounded-full "
            onClick={logout}
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  )
}

export default ProfileDropdown

import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearJwt } from '../../store/slice'

import Avatar from '../NavBar/components/Avatar'

const ProfileDropdown = (props) => {
  const { isAuthenticated, logout } = props.auth

  const dispatch = useDispatch()

  const handleSignOut = () => {
    dispatch(clearJwt())
    localStorage.clear() // TODO
    logout()
  }

  return (
    <div className="bg-WhiteBG1 shadow-lg border-md w-52 rounded-lg fixed">
      <div className="flex p-4 items-center">
        <div>
          <Avatar user={props.user} />
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
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  )
}

export default ProfileDropdown

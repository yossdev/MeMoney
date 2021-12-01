import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearJwt } from '../../store/slice'

import Avatar from '../NavBar/components/Avatar'

const ProfileDropdown = (props) => {
  const { isAuthenticated, logout } = props.auth
  const { setIsActive, isActive } = props

  const dispatch = useDispatch()

  const handleSignOut = () => {
    dispatch(clearJwt())
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
        <NavLink
          to="profile"
          className={
            isActive === 'profile'
              ? 'text-Red1 font-semibold py-2'
              : 'text-BlackGrey1 font-semibold py-2'
          }
          onClick={() => setIsActive('profile')}
        >
          Profile
        </NavLink>
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

import { HiMenu } from 'react-icons/hi'

import ProfileDropdownButton from '../../ProfileDropdown/ProfileDropdownButton'
import { NavLink } from 'react-router-dom'

const AuthNav = (props) => {
  const { avatarOpen, setAvatarOpen, menuOpen, setMenuOpen, user } = props
  return (
    <>
      <div className="lg:block hidden">
        <ul className="flex items-center space-x-5">
          <li>
            <NavLink
              to="/manager"
              className="font-medium text-BlackGrey2"
              onClick={() => props.refetch({})}
            >
              Manager
            </NavLink>
          </li>
          <li>
            <NavLink to="charts" className="font-medium text-BlackGrey2">
              Charts
            </NavLink>
          </li>
        </ul>
      </div>

      <ProfileDropdownButton
        avatarOpen={avatarOpen}
        setAvatarOpen={setAvatarOpen}
        setMenuOpen={setMenuOpen}
        user={user}
      />

      <div className="lg:hidden block flex items-center">
        {/*Hamburger Menu*/}
        <button
          type="button"
          aria-label="Toggle mobile menu"
          className="focus:outline-none rounded focus:ring ring-Red1 ring-opacity-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <HiMenu
            size="1.6em"
            className={`transition duration-100 ease h-8 w-8 ${
              menuOpen ? 'transform rotate-90' : ''
            }`}
          />
        </button>
      </div>
    </>
  )
}

export default AuthNav

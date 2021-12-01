import { HiMenu } from 'react-icons/hi'

import ProfileDropdownButton from '../../ProfileDropdown/ProfileDropdownButton'
import { NavLink } from 'react-router-dom'

const AuthNav = (props) => {
  const {
    avatarOpen,
    setAvatarOpen,
    menuOpen,
    setMenuOpen,
    user,
    isActive,
    setIsActive,
  } = props

  const handleManagerLink = () => {
    setIsActive('/manager')
    // props.refetch({})
  }

  return (
    <>
      <div className="lg:block hidden">
        <ul className="flex items-center space-x-5">
          <li>
            <NavLink
              to="/manager"
              className={
                isActive === '/manager'
                  ? 'font-semibold text-Red1'
                  : 'font-medium text-BlackGrey2'
              }
              onClick={handleManagerLink}
            >
              Manager
            </NavLink>
          </li>
          <li>
            <NavLink
              to="charts"
              className={
                isActive === '/manager/charts'
                  ? 'font-semibold text-Red1'
                  : 'font-medium text-BlackGrey2'
              }
              onClick={() => setIsActive('/manager/charts')}
            >
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

      <div className="lg:hidden flex items-center">
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

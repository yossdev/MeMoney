import { HiMenu } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'

const UnAuthNav = ({ menuOpen, setMenuOpen, auth }) => {
  const { isAuthenticated, loginWithRedirect, logout } = auth

  return (
    <>
      <div className="lg:block hidden">
        <ul className="flex items-center space-x-5">
          <li>
            <NavLink to="/" className="font-medium text-BlackGrey2">
              Welcome
            </NavLink>
          </li>
          {isAuthenticated && (
            <li>
              <NavLink to="/manager" className="font-medium text-BlackGrey2">
                Manager
              </NavLink>
            </li>
          )}
          <li>
            <NavLink to="/about" className="font-medium text-BlackGrey2">
              About
            </NavLink>
          </li>
        </ul>
      </div>

      {!isAuthenticated && (
        <button
          type="button"
          className="p-1 px-2.5 rounded-full bg-Red1 text-WhiteBG1 font-medium text-WhiteBG1"
          onClick={() => loginWithRedirect()}
        >
          Sign In
        </button>
      )}
      {isAuthenticated && (
        <button
          type="button"
          className="p-1 px-2.5 rounded-full bg-Red1 text-WhiteBG1 font-medium text-WhiteBG1"
          onClick={() => logout()}
        >
          Sign Out
        </button>
      )}

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

export default UnAuthNav

import { HiMenu } from 'react-icons/hi'

import UserIcon from './UserIcon'

const AuthNav = ({ menuOpen, setMenuOpen, navLinks }) => {
  return (
    <>
      <div className="lg:block hidden">
        <ul className="flex items-center space-x-5">{navLinks}</ul>
      </div>

      <UserIcon />

      <div className="lg:hidden block flex items-center">
        {/*Hamburger Menu*/}
        <button
          type="button"
          aria-label="Toggle mobile menu"
          className="focus:outline-none rounded focus:ring ring-red-600 ring-opacity-50"
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

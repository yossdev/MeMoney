import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import Logo from './components/Logo'
import UnAuthNav from './components/UnAuthNav'

const SignedOut = (props) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isActive, setIsActive] = useState(window.location.pathname)

  return (
    <nav className="sticky top-0 z-50">
      <div className="bg-WhiteBG1">
        <section className="px-4 py-3.5 shadow-md border-md">
          <main className="container mx-auto flex items-center justify-between">
            <section className="flex items-center space-x-8">
              <Logo />
            </section>
            <section className="flex items-center space-x-5">
              <UnAuthNav
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
                auth={props}
                isActive={isActive}
                setIsActive={setIsActive}
              />
            </section>
          </main>
        </section>
        {/*Mobile Menu*/}
        {menuOpen && (
          <section className="lg:hidden block bg-LightYellow1 py-4">
            <div>
              <ul className="flex flex-col space-y-5 items-center">
                <li>
                  <NavLink
                    to="/"
                    className={
                      isActive === '/'
                        ? 'font-semibold text-Red1'
                        : 'font-medium text-BlackGrey2'
                    }
                    onClick={() => setIsActive('/')}
                  >
                    Welcome
                  </NavLink>
                </li>
                {props.isAuthenticated && (
                  <li>
                    <NavLink
                      to="/manager"
                      className="font-medium text-BlackGrey2"
                    >
                      Manager
                    </NavLink>
                  </li>
                )}
                <li>
                  <NavLink
                    to="/about"
                    className={
                      isActive === '/about'
                        ? 'font-semibold text-Red1'
                        : 'font-medium text-BlackGrey2'
                    }
                    onClick={() => setIsActive('/about')}
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </section>
        )}
      </div>
    </nav>
  )
}

export default SignedOut

import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import Logo from './components/Logo'
import UnAuthNav from './components/UnAuthNav'

const SignedOut = (props) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
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
                <NavLink to="/" className="font-medium text-BlackGrey2">
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
                <NavLink to="/about" className="font-medium text-BlackGrey2">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </section>
      )}
    </nav>
  )
}

export default SignedOut

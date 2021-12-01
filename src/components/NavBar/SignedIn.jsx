import { useState } from 'react'

import Logo from './components/Logo'
import AuthNav from './components/AuthNav'
import ProfileDropdown from '../ProfileDropdown'
import { NavLink } from 'react-router-dom'

const SignedIn = (props) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [avatarOpen, setAvatarOpen] = useState(false)
  const [isActive, setIsActive] = useState(window.location.pathname)

  const handleManagerLink = () => {
    setIsActive('/manager')
    // props.refetch({})
  }

  return (
    <>
      <nav className="sticky top-0 z-50">
        <div className="bg-WhiteBG1">
          <section className="px-4 py-3.5 shadow-md border-md">
            <main className="container mx-auto flex items-center justify-between">
              <section className="flex items-center space-x-8">
                <Logo />
              </section>
              <section className="flex items-center space-x-5">
                <AuthNav
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
                  avatarOpen={avatarOpen}
                  setAvatarOpen={setAvatarOpen}
                  user={props.user}
                  refetch={props.refetch}
                  isActive={isActive}
                  setIsActive={setIsActive}
                  handleManagerLink={handleManagerLink}
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
            </section>
          )}
        </div>
        <div className="container flex justify-end mx-auto my-0.5">
          {avatarOpen && (
            <ProfileDropdown
              auth={props}
              user={props.user}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          )}
        </div>
      </nav>
    </>
  )
}

export default SignedIn

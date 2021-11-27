import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import Logo from './components/Logo'
import AuthNav from './components/AuthNav'
import ProfileDropdown from '../ProfileDropdown'

const authPages = ['Manager', 'Charts']
const authUser = authPages.map((page) => (
  <li key={page}>
    <NavLink
      to={`/${page.toLowerCase()}`}
      className="font-medium text-BlackGrey2"
    >
      {page}
    </NavLink>
  </li>
))

const SignedIn = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [avatarOpen, setAvatarOpen] = useState(false)

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
                  authUser={authUser}
                  avatarOpen={avatarOpen}
                  setAvatarOpen={setAvatarOpen}
                />
              </section>
            </main>
          </section>
          {/*Mobile Menu*/}
          {menuOpen && (
            <section className="lg:hidden block bg-LightYellow1 py-4">
              <div>
                <ul className="flex flex-col space-y-5 items-center">
                  {authUser}
                </ul>
              </div>
            </section>
          )}
        </div>
        <div className="container flex justify-end mx-auto my-0.5">
          {avatarOpen && <ProfileDropdown />}
        </div>
      </nav>
    </>
  )
}

export default SignedIn

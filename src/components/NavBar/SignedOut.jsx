import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import Logo from './components/Logo'
import UnAuthNav from './components/UnAuthNav'

const unAuthPages = ['Welcome', 'Features', 'About']
const unAuthUser = unAuthPages.map((page) => (
  <li key={page}>
    <NavLink to={`../${page.toLowerCase()}`} className="font-medium">
      {page}
    </NavLink>
  </li>
))

const SignedOut = () => {
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
              unAuthUser={unAuthUser}
            />
          </section>
        </main>
      </section>
      {/*Mobile Menu*/}
      {menuOpen && (
        <section className="lg:hidden block bg-yellow-50 py-4">
          <div>
            <ul className="flex flex-col space-y-5 items-center">
              {unAuthUser}
            </ul>
          </div>
        </section>
      )}
    </nav>
  )
}

export default SignedOut

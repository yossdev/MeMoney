import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import Logo from './Logo'
import AuthNav from './AuthNav'

const pages = ['Manager', 'Charts', 'Categories']
const navLinks = pages.map((page) => (
  <li key={page}>
    <NavLink to={`./${page.toLowerCase()}`} className="font-medium">
      {page}
    </NavLink>
  </li>
))

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
      <section className="px-4 py-3.5 shadow-md border-md">
        <main className="container mx-auto flex items-center justify-between">
          <section className="flex items-center space-x-8">
            <Logo />
          </section>
          <section className="flex items-center space-x-5">
            <AuthNav
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              navLinks={navLinks}
            />
          </section>
        </main>
      </section>

      {/*Mobile Menu*/}
      {menuOpen && (
        <section className="lg:hidden block bg-yellow-50 py-4">
          <div>
            <ul className="flex flex-col space-y-5 items-center">{navLinks}</ul>
          </div>
        </section>
      )}
    </nav>
  )
}

export default NavBar

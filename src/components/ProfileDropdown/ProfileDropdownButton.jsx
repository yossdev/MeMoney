import React, { useEffect, useRef } from 'react'
import Avatar from '../NavBar/components/Avatar'

const ProfileDropdownButton = ({ avatarOpen, setAvatarOpen, setMenuOpen }) => {
  const drop = useRef(null)

  const handleClick = (e) => {
    if (!e.target.closest(`.${drop.current?.className}`) && avatarOpen) {
      setAvatarOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  })

  const handleDropdown = () => {
    setMenuOpen(false)
    setAvatarOpen((open) => !open)
  }

  return (
    <div className="dropdown" ref={drop}>
      <button type="button" onClick={handleDropdown}>
        <Avatar />
      </button>
    </div>
  )
}

export default ProfileDropdownButton

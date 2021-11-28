import { useAuth0 } from '@auth0/auth0-react'
import { Outlet, useNavigate } from 'react-router-dom'

import SignedIn from '../../components/NavBar/SignedIn'
import { useEffect } from 'react'

const MeMoneyDash = () => {
  const { isLoading, logout, isAuthenticated } = useAuth0()

  let navigate = useNavigate()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/', { replace: true })
    }
  })

  if (isLoading) return <div>Loading ...</div>
  return (
    <>
      <SignedIn isAuthenticated={isAuthenticated} logout={logout} />
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default MeMoneyDash

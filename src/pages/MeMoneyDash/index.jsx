import { useAuth0 } from '@auth0/auth0-react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_USER } from '../../GraphQL/Query'

import SignedIn from '../../components/NavBar/SignedIn'
import Loading from '../../components/Loading'
import Error from '../Errors/Error'
import Footer from '../../components/Footer/Footer'

const MeMoneyDash = () => {
  const { isLoading, logout, isAuthenticated } = useAuth0()

  const { data, loading, error, refetch } = useQuery(GET_USER, {
    notifyOnNetworkStatusChange: true,
  })

  let navigate = useNavigate()
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/', { replace: true })
    }
  })

  if (isLoading || loading) return <Loading />
  if (error) return <Error error={error} />

  const user = data.users[0]

  return (
    <>
      <SignedIn
        isAuthenticated={isAuthenticated}
        logout={logout}
        user={user}
        refetch={refetch}
      />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MeMoneyDash

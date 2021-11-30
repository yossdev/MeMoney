import { useAuth0 } from '@auth0/auth0-react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_USER } from '../../GraphQL/Query'

import SignedIn from '../../components/NavBar/SignedIn'
import Loading from '../../components/Loading'
import Error from '../Errors/Error'
import { useDispatch } from 'react-redux'
import { storeBudget } from '../../store/slice'
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

  const dispatch = useDispatch()

  if (isLoading) return <Loading />
  if (loading) return <Loading />
  if (error) return <Error error={error} />

  const user = data.users[0]
  dispatch(storeBudget(user.budgets[0].id))

  return (
    <>
      <SignedIn
        isAuthenticated={isAuthenticated}
        logout={logout}
        user={user}
        refetch={refetch}
      />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default MeMoneyDash

import { useAuth0 } from '@auth0/auth0-react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { storeJwt } from '../../store/slice'

import SignedOut from '../../components/NavBar/SignedOut'
import Loading from '../../components/Loading'
import Error from '../Errors/Error'

const LandingPage = () => {
  document.title = 'Welcome'

  const {
    getAccessTokenSilently,
    isLoading,
    loginWithRedirect,
    logout,
    isAuthenticated,
    error,
  } = useAuth0()

  const dispatch = useDispatch()

  useEffect(() => {
    ;(async () => {
      const domain = process.env.REACT_APP_AUTH0_DOMAIN
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: 'read:current_user',
        })
        // store accessToken
        dispatch(storeJwt(accessToken))
        localStorage.setItem('jwtToken', accessToken)
      } catch (e) {
        console.log(e.message)
      }
    })()
  }, [dispatch, getAccessTokenSilently])

  // for redirect after successful login
  let navigate = useNavigate()
  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate('/manager')
    }
  })

  if (isLoading) return <Loading />
  if (error) return <Error error={error} />
  return (
    <>
      <SignedOut
        loginWithRedirect={loginWithRedirect}
        logout={logout}
        isAuthenticated={isAuthenticated}
      />
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default LandingPage

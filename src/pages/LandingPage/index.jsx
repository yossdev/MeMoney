import SignedOut from '../../components/NavBar/SignedOut'
import { useAuth0 } from '@auth0/auth0-react'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import inMemoryJWT from '../../jwt/inMemoryJWT'

const LandingPage = () => {
  document.title = 'Welcome'

  const {
    getAccessTokenSilently,
    isLoading,
    loginWithRedirect,
    logout,
    isAuthenticated,
  } = useAuth0()

  useEffect(() => {
    ;(async () => {
      const domain = process.env.REACT_APP_AUTH0_DOMAIN
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: 'read:current_user',
        })
        inMemoryJWT.setToken(accessToken)
      } catch (e) {
        console.error(e)
        console.log(e.message)
      }
    })()
  }, [getAccessTokenSilently])

  // for redirect after successful login
  // let navigate = useNavigate()
  // useEffect(() => {
  //   if (!isLoading && isAuthenticated) {
  //     navigate('/manager')
  //   }
  // })

  if (isLoading) return <div>Loading ...</div>
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

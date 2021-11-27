import { useGoogleLogout } from 'react-google-login'
import { useNavigate } from 'react-router-dom'

const clientId = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID

const SignOut = () => {
  let navigate = useNavigate()

  const onLogoutSuccess = (res) => {
    navigate('/')
    alert('Logged out Successfully')
  }

  const onFailure = () => {
    console.log('Handle failure cases')
  }

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  })

  return (
    <button
      type="button"
      className="bg-Red1 px-2.5 py-1 my-2.5 text-WhiteBG1 rounded-full "
      onClick={signOut}
    >
      Sign Out
    </button>
  )
}

export default SignOut

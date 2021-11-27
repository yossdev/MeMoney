import { useGoogleLogin } from 'react-google-login'
import { useNavigate } from 'react-router-dom'
import { refreshTokenSetup } from './utils/refreshTokenSetup'

const clientId = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID

const SignInWithGoogle = () => {
  let navigate = useNavigate()

  const onSuccess = (res) => {
    navigate('/manager')
    console.log('res:', res)
    console.log('Login Success: currentUser is', res.profileObj)
    refreshTokenSetup(res)
  }

  const onFailure = (res) => {
    console.log('Login failed: res:', res)
  }

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    cookiePolicy: 'single_host_origin',
  })

  return (
    <button
      type="button"
      className="p-1 px-2.5 rounded-full bg-Red1 text-WhiteBG1 font-medium text-WhiteBG1"
      onClick={signIn}
    >
      Sign In
    </button>
  )
}

export default SignInWithGoogle

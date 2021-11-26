import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { GoogleLogin, GoogleLogout } from 'react-google-login'

const clientId = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID

function Login() {
  const [showloginButton, setShowloginButton] = useState(true)
  const [showlogoutButton, setShowlogoutButton] = useState(false)

  // let navigate = useNavigate()

  const onLoginSuccess = (res) => {
    // navigate('/manager')
    console.log('Login Success:', res.profileObj)
    setShowloginButton(false)
    setShowlogoutButton(true)
  }

  const onLoginFailure = (res) => {
    console.log('Login Failed:', res)
  }

  const onSignoutSuccess = () => {
    alert('You have been logged out successfully')
    console.clear()
    setShowloginButton(true)
    setShowlogoutButton(false)
  }

  return (
    <div>
      {showloginButton ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign In"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      ) : null}

      {showlogoutButton ? (
        <GoogleLogout
          clientId={clientId}
          buttonText="Sign Out"
          onLogoutSuccess={onSignoutSuccess}
        />
      ) : null}
    </div>
  )
}
export default Login

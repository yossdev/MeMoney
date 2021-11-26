import SignedOut from '../../components/NavBar/SignedOut'
// import Login from '../../OAuth/SignIn'

const LandingPage = () => {
  document.title = 'Welcome'
  return (
    <>
      <SignedOut />
      {/*<Login />*/}
    </>
  )
}

export default LandingPage

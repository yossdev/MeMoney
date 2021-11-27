import SignedOut from '../../components/NavBar/SignedOut'

const LandingPage = () => {
  document.title = 'Welcome'
  return (
    <>
      <SignedOut />
    </>
  )
}

export default LandingPage

import SignedOut from '../../components/NavBar/SignedOut'
// import Login from '../../OAuth/SignIn'

const Index = () => {
  document.title = 'Welcome'
  return (
    <>
      <SignedOut />
      {/*<Login />*/}
    </>
  )
}

export default Index

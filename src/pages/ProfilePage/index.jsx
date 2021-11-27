import SignedIn from '../../components/NavBar/SignedIn'

const ProfilePage = () => {
  document.title = 'Profile'
  return (
    <>
      <SignedIn />
      <div>Profile Page</div>
    </>
  )
}

export default ProfilePage

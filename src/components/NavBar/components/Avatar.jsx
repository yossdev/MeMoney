import user from '../../../assets/img/user.jpg'

const Avatar = () => {
  return (
    <>
      <img
        src={user}
        alt="user avatar"
        className="max-w-1 object-cover rounded-full"
      />
    </>
  )
}

export default Avatar

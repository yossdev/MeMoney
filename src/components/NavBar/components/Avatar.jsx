import user from '../../../assets/img/user.jpg'

const Avatar = () => {
  return (
    <>
      <button type="button">
        <img src={user} alt="user" className="w-7 object-cover rounded-full" />
      </button>
    </>
  )
}

export default Avatar

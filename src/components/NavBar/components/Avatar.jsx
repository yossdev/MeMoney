import user from '../../../assets/img/user.jpg'

const Avatar = () => {
  return (
    <div>
      <img src={user} alt="user" className="w-7 object-cover rounded-full" />
    </div>
  )
}

export default Avatar

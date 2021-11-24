import user from '../../assets/img/user.jpg'

const UserIcon = () => {
  return (
    <div>
      <img
        src={user}
        alt="user"
        className="w-7 object-cover rounded-full"
      />
    </div>
  )
}

export default UserIcon

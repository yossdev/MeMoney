const Avatar = (props) => {
  return (
    <>
      <img
        src={props.user.picture}
        alt="avatar"
        className="max-w-1 object-cover rounded-full"
      />
    </>
  )
}

export default Avatar

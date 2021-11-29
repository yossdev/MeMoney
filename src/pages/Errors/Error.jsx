import { useNavigate } from 'react-router-dom'

const Error = (props) => {
  const { error } = props

  let navigate = useNavigate()
  const handleOK = () => {
    navigate('/', { replace: true })
  }

  console.log(error)
  return (
    <div className="container mx-auto grid justify-center pt-16">
      <h1>Sorry something went wrong ...</h1>
      <p>Let's get back</p>
      <button
        className="bg-Red1 rounded-xl text-WhiteBG1"
        type="button"
        onClick={handleOK}
      >
        OK
      </button>
    </div>
  )
}

export default Error

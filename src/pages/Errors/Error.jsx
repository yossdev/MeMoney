import { useNavigate } from 'react-router-dom'

const Error = (props) => {
  const { error } = props

  let navigate = useNavigate()
  const handleOK = () => {
    navigate('/', { replace: true })
  }

  console.log(error)
  return (
    <div className="min-h-screen">
      <div className="container mx-auto grid justify-center mt-7">
        <p className="text-center text-xl font-medium my-10">
          Sorry something went wrong ... <br />
          Let's get back or <b>Refresh the page.</b>
        </p>

        <div className="grid justify-center">
          <button
            type="button"
            onClick={handleOK}
            className="bg-Red1 text-lg font-semibold  text-WhiteBG1 rounded-full w-24 py-0.5"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  )
}

export default Error

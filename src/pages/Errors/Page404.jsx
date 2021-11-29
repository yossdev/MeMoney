import { useNavigate } from 'react-router-dom'

const Page404 = () => {
  document.title = 'Not Found'

  let navigate = useNavigate()
  const handleOK = () => {
    navigate('/', { replace: true })
  }

  return (
    <div className="container mx-auto grid justify-center">
      <p>Let's get back</p>
      <button type="button" onClick={handleOK}>
        OK
      </button>
    </div>
  )
}

export default Page404

import { useNavigate } from 'react-router-dom'

import { ReactComponent as Art404 } from '../../assets/404.svg'

const Page404 = () => {
  document.title = 'Not Found'

  let navigate = useNavigate()
  const handleOK = () => {
    navigate('/', { replace: true })
  }

  return (
    <div className="container mx-auto h-screen pt-20">
      <div className="grid justify-center items-center">
        <Art404 />

        <p className="text-9xl font-bold text-center">404</p>

        <p className="text-center text-xl font-medium my-10">
          Looks like your're lost, <br />
          Let's get you back on track
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

export default Page404

import { useQuery } from '@apollo/client'
import { GET_USER } from '../../GraphQL/Query'

import Loading from '../../components/Loading'
import Error from '../Errors/Error'

const ProfilePage = () => {
  document.title = 'Profile'

  const { data, loading, error } = useQuery(GET_USER, {
    notifyOnNetworkStatusChange: true,
  })

  if (loading) return <Loading />
  if (error) return <Error error={error} />

  const user = data.users[0]

  return (
    <div className="container mx-auto min-h-screen">
      <h1 className="text-center text-3xl font-semibold text-BlackGrey1 my-10">
        Profile
      </h1>

      <figure className="bg-LightYellow1 rounded-xl shadow-lg md:w-1/3 w-3/4 mx-auto py-10">
        <img
          className="w-36 h-36 rounded-full mx-auto"
          src={user.picture}
          alt="avatar"
        />
        <div className="flex-col pt-6 md:p-8 text-center space-y-4">
          <p className="text-lg font-semibold">{user.name}</p>

          <figcaption className="font-medium">
            <p className="text-lg font-semibold py-3"> {user.email}</p>
            <p className="text-lg font-semibold py-3">
              <i className="text-sm">Join Date: </i>
              {user.created_at.slice(0, 10)}
            </p>
          </figcaption>
        </div>
      </figure>
    </div>
  )
}

export default ProfilePage

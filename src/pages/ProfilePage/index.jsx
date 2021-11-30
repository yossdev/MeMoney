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
    <div>
      <h1 className="text-center text-3xl font-medium mt-16">Profile</h1>
      <img src={user.picture} className="rounded-full" alt="userPicture" />
      <p>Nama: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Join: {user.created_at.slice(0, 10)}</p>
    </div>
  )
}

export default ProfilePage

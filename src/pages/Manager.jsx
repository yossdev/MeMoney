import ManagerBar from '../components/ManagerBar'
import NavBar from '../components/nav/NavBar'
import Summary from '../components/Summary'
import ItemsLists from '../components/ItemsLists'

const Manager = () => {
  document.title = 'Manager'
  return (
    <>
      <NavBar />
      <ManagerBar />
      <Summary />
      <ItemsLists />
    </>
  )
}

export default Manager

import ManagerBar from '../../components/ManagerBar'
import Summary from '../../components/Summary'
import ItemsLists from '../../components/ItemsLists'

const Manager = () => {
  document.title = 'Manager'
  return (
    <>
      <div className="container mx-auto px-4">
        <ManagerBar />
        <Summary />
        <ItemsLists />
      </div>
    </>
  )
}

export default Manager

import ManagerBar from '../../components/Transactions/ManagerBar'
import Summary from '../../components/Transactions/Summary'
import TransactionList from '../../components/Transactions/TransactionList'

const Manager = () => {
  document.title = 'Manager'
  return (
    <>
      <div className="container mx-auto px-4">
        <ManagerBar />
        <Summary />
        <TransactionList />
      </div>
    </>
  )
}

export default Manager

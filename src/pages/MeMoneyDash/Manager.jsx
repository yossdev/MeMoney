import { useQuery } from '@apollo/client'
import { GET_TRANSACTIONS } from '../../GraphQL/Query'

import ManagerBar from '../../components/Transactions/ManagerBar'
import Summary from '../../components/Transactions/Summary'
import TransactionList from '../../components/Transactions/TransactionList'
import Loading from '../../components/Loading'
import Error from '../Errors/Error'

const Manager = () => {
  document.title = 'Manager'

  const { data, loading, error, refetch } = useQuery(GET_TRANSACTIONS)

  if (loading) return <Loading />
  if (error) return <Error />

  const budgets = data.users[0].budgets[0]
  const transactions = budgets.transactions

  return (
    <>
      <div className="container mx-auto px-4">
        <ManagerBar budgets={budgets} />
        <Summary />
        <TransactionList transactions={transactions} budgets={budgets} />
      </div>
    </>
  )
}

export default Manager

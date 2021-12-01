import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import {
  GET_TRANSACTIONS_BY_DATE,
  GET_TRANSACTIONS_SUM_EXPENSES,
  GET_TRANSACTIONS_SUM_INCOME,
} from '../../GraphQL/Query'

import ManagerBar from '../../components/Transactions/ManagerBar'
import Summary from '../../components/Transactions/Summary'
import TransactionList from '../../components/Transactions/TransactionList'
import Loading from '../../components/Loading'
import Error from '../Errors/Error'

const Manager = () => {
  document.title = 'Manager'

  const date = new Date()
  const [month, setMonth] = useState(date.getMonth() + 1)
  const [year, setYear] = useState(date.getFullYear())

  let ld = new Date(year, month, 0)
  let lastDay = ld.getDate()

  const handleChange = (date) => {
    setMonth(date._a[1] + 1)
    setYear(date._a[0])
  }

  const [variables, setVariables] = useState({
    variables: {
      date: {
        _gte: `${year}-${month}-01`,
        _lte: `${year}-${month}-${lastDay}`,
      },
    },
  })

  // TODO need to clear unmounted component, don't know where it happen
  useEffect(() => {
    setVariables({
      variables: {
        date: {
          _gte: `${year}-${month}-01`,
          _lte: `${year}-${month}-${lastDay}`,
        },
      },
    })
  }, [year, month, lastDay])

  const { data, loading, error, refetch } = useQuery(GET_TRANSACTIONS_BY_DATE, {
    ...variables,
    fetchPolicy: 'network-only', // Used for first execution
    nextFetchPolicy: 'cache-first', // Used for subsequent executions
  })

  const {
    data: income,
    loading: incomeLoading,
    error: incomeError,
    refetch: incomeRefetch,
  } = useQuery(GET_TRANSACTIONS_SUM_INCOME, {
    ...variables,
    fetchPolicy: 'network-only', // Used for first execution
    nextFetchPolicy: 'cache-first', // Used for subsequent executions
  })

  const {
    data: expenses,
    loading: expensesLoading,
    error: expensesError,
    refetch: expensesRefetch,
  } = useQuery(GET_TRANSACTIONS_SUM_EXPENSES, {
    ...variables,
    fetchPolicy: 'network-only', // Used for first execution
    nextFetchPolicy: 'cache-first', // Used for subsequent executions
  })

  if (loading || incomeLoading || expensesLoading) return <Loading />
  if (error || incomeError || expensesError) return <Error />

  const budgets = data.users[0].budgets[0]
  const transactions = budgets.transactions

  const sumExpense =
    expenses.users[0].budgets[0].transactions_aggregate.aggregate.sum.money
  const sumIncome =
    income.users[0].budgets[0].transactions_aggregate.aggregate.sum.money

  // console.log('sum income:', income)
  // console.log('sum expenses:', expenses)
  // console.log('transactions:', transactions)

  return (
    <>
      <div className="container mx-auto px-4">
        <ManagerBar
          budgets={budgets}
          month={month}
          year={year}
          handleChange={handleChange}
        />
        <Summary sumExpense={sumExpense} sumIncome={sumIncome} />
        <TransactionList transactions={transactions} />
      </div>
    </>
  )
}

export default Manager

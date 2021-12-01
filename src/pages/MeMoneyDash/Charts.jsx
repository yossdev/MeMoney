import { PieChart, Pie, ResponsiveContainer } from 'recharts'

import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Legend,
} from 'recharts'

import { useQuery } from '@apollo/client'
import { useState, useEffect } from 'react'

import Loading from '../../components/Loading'
import Error from '../Errors/Error'
import FilterMonth from '../../components/FilterMonth'

import { GET_INCOME_EXPENSES_CATEGORIES_BY_MONTH } from '../../GraphQL/Query'

const Charts = () => {
  document.title = 'Charts'

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
    return year && month && lastDay
  }, [year, month, lastDay])

  const { data, loading, error, refetch } = useQuery(
    GET_INCOME_EXPENSES_CATEGORIES_BY_MONTH,
    {
      ...variables,
      fetchPolicy: 'network-only', // Used for first execution
      nextFetchPolicy: 'cache-first', // Used for subsequent executions
    }
  )

  if (loading) return <Loading />
  if (error) return <Error />

  const dataQuery = data.users[0].budgets[0].transactions
  const budgetTitle = data.users[0].budgets[0].title

  // income
  const salary = dataQuery
    .filter((v) => v.income_categories === 'Salary')
    .reduce(
      (a, b) => {
        return { money: a.money + b.money } // returns object with property money
      },
      { money: 0 }
    )

  const investment = dataQuery
    .filter((v) => v?.income_categories === 'Investment')
    .reduce(
      (a, b) => {
        return { money: a.money + b.money } // returns object with property money
      },
      { money: 0 }
    )

  const awards = dataQuery
    .filter((v) => v?.income_categories === 'Awards')
    .reduce(
      (a, b) => {
        return { money: a.money + b.money } // returns object with property money
      },
      { money: 0 }
    )

  const grants = dataQuery
    .filter((v) => v?.income_categories === 'Grants')
    .reduce(
      (a, b) => {
        return { money: a.money + b.money } // returns object with property money
      },
      { money: 0 }
    )

  const others = dataQuery
    .filter((v) => v?.income_categories === 'Others')
    .reduce(
      (a, b) => {
        return { money: a.money + b.money } // returns object with property money
      },
      { money: 0 }
    )

  const incomeCategoriesTotal = [
    { name: 'Salary', value: salary.money },
    { name: 'Investment', value: investment.money },
    { name: 'Awards', value: awards.money },
    { name: 'Grants', value: grants.money },
    { name: 'Others', value: others.money },
  ]

  // expense
  const bills = dataQuery
    .filter((v) => v?.expense_categories === 'Bills')
    .reduce(
      (a, b) => {
        return { money: a.money + b.money } // returns object with property money
      },
      { money: 0 }
    )

  const food = dataQuery
    .filter((v) => v?.expense_categories === 'Food')
    .reduce(
      (a, b) => {
        return { money: a.money + b.money } // returns object with property money
      },
      { money: 0 }
    )

  const transportation = dataQuery
    .filter((v) => v?.expense_categories === 'Transportation')
    .reduce(
      (a, b) => {
        return { money: a.money + b.money } // returns object with property money
      },
      { money: 0 }
    )

  const entertainment = dataQuery
    .filter((v) => v?.expense_categories === 'Entertainment')
    .reduce(
      (a, b) => {
        return { money: a.money + b.money } // returns object with property money
      },
      { money: 0 }
    )

  const othersExpense = dataQuery
    .filter((v) => v?.expense_categories === 'Others')
    .reduce(
      (a, b) => {
        return { money: a.money + b.money } // returns object with property money
      },
      { money: 0 }
    )

  const expenseCategoriesTotal = [
    { name: 'Bills', value: bills.money },
    { name: 'Food', value: food.money },
    { name: 'Transportation', value: transportation.money },
    { name: 'Entertainment', value: entertainment.money },
    { name: 'Others', value: othersExpense.money },
  ]

  return (
    <div className="container mx-auto">
      <section className="py-5" />
      <figure className="flex justify-between items-center bg-LightYellow2 px-5 py-3 mt-5 rounded-xl">
        <h1 className="text-BlackGrey1 font-medium">{budgetTitle}</h1>
        <FilterMonth month={month} year={year} handleChange={handleChange} />
        <div />
      </figure>

      <div className="grid min-h-screen">
        <div className="py-5 mx-auto">
          {/* <ResponsiveContainer width="100%" height={350}> */}
          <PieChart width={720} height={350}>
            <Pie
              data={incomeCategoriesTotal}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={50}
              fill="#8884d8"
            />
            <Pie
              data={expenseCategoriesTotal}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#82ca9d"
              label
            />
            <Legend />
          </PieChart>
          {/* </ResponsiveContainer> */}
        </div>

        <div className="md:flex grid mx-auto py-7">
          {/* income */}
          <div className="py-7">
            <p className="text-center py-7 text-xl font-bold text-Red1">
              Income
            </p>
            <BarChart width={730} height={350} data={incomeCategoriesTotal}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </div>

          {/* expense */}
          <div className="py-7">
            <p className="text-center py-7 text-xl font-bold text-Red1">
              Expenses
            </p>
            <BarChart width={730} height={350} data={expenseCategoriesTotal}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Charts

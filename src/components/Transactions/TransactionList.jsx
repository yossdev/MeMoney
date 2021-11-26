import ItemList from './ItemList'

const transactions = [
  {
    id: 1,
    memo: 'gajian',
    money: 25000,
    date: '2021-11-26',
    type: 'Income',
  },
  {
    id: 2,
    memo: 'honor',
    money: 25000,
    date: '2021-11-27',
    type: 'Income',
  },
  {
    id: 3,
    memo: 'entertainment',
    money: 25000,
    date: '2021-11-28',
    type: 'Expenses',
  },
  {
    id: 4,
    memo: 'jual pulsa',
    money: 25000,
    date: '2021-11-27',
    type: 'Income',
  },
  {
    id: 5,
    memo: 'menang lotre',
    money: 25000,
    date: '2021-11-26',
    type: 'Income',
  },
  {
    id: 6,
    memo: 'client bayar jasa',
    money: 25000,
    date: '2021-11-28',
    type: 'Income',
  },
]

const data = transactions.sort((a, b) => {
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return new Date(b.date) - new Date(a.date)
})

console.log(data)

const income = data.filter((v) => v.type === 'Income')
const expenses = data.filter((v) => v.type === 'Expenses')

const uniqueDate = [...new Set(data.map((v) => v.date))]

const TransactionList = () => {
  return (
    <>
      {uniqueDate.map((date) => (
        <ItemList key={date} date={date} income={income} expenses={expenses} />
      ))}
    </>
  )
}

export default TransactionList

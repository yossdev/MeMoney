import ItemList from './ItemList'

// const transactions = [
//   {
//     id: 1,
//     memo: 'gajian',
//     money: 25000,
//     date: '2021-11-26',
//     type: 'Income',
//   },
//   {
//     id: 2,
//     memo: 'honor',
//     money: 25000,
//     date: '2021-11-27',
//     type: 'Income',
//   },
//   {
//     id: 3,
//     memo: 'entertainment',
//     money: 25000,
//     date: '2021-11-28',
//     type: 'Expenses',
//   },
//   {
//     id: 4,
//     memo: 'jual pulsa',
//     money: 25000,
//     date: '2021-11-27',
//     type: 'Income',
//   },
//   {
//     id: 5,
//     memo: 'menang lotre',
//     money: 27000,
//     date: '2021-11-26',
//     type: 'Income',
//   },
//   {
//     id: 6,
//     memo: 'client bayar jasa',
//     money: 25000,
//     date: '2021-11-28',
//     type: 'Income',
//   },
//   {
//     id: 7,
//     memo: 'Gym',
//     money: 50000,
//     date: '2021-11-29',
//     type: 'Expenses',
//   },
// ]

const TransactionList = (props) => {
  const { transactions } = props

  const uniqueDates = [...new Set(transactions.map((v) => v.date))]
  const dates = uniqueDates.sort((a, b) => {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.date) - new Date(a.date)
  })
  return (
    <>
      {dates.map((date) => (
        <ItemList key={date} date={date} data={transactions} />
      ))}
    </>
  )
}

export default TransactionList

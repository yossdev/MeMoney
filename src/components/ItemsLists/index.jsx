import Items from './Items'

const transactions = [
  {
    id: 1,
    memo: 'gajian',
  },
  {
    id: 1,
    memo: 'honor',
  },
  {
    id: 1,
    memo: 'award',
  },
]

const Index = () => {
  return (
    <>
      {transactions
        .slice(0)
        .reverse()
        .map((transaction) => (
          <Items key={transaction.id} transaction={transaction} />
        ))}
    </>
  )
}

export default Index

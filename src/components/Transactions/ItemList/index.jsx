import Item from './Item'
import ItemHeader from './ItemHeader'

const Index = (props) => {
  const totalIncome = props.income
    .filter((v) => v.date === props.date)
    .reduce(
      (a, b) => {
        return { money: a.money + b.money } // returns object with property money
      },
      { money: 0 }
    )

  const totalExpenses = props.expenses
    .filter((v) => v.date === props.date)
    .reduce(
      (a, b) => {
        return { money: a.money + b.money } // returns object with property money
      },
      { money: 0 }
    )

  return (
    <>
      {totalIncome.money > 0 ? (
        <div className="my-4 py-1 bg-LightYellow1 rounded-lg">
          <ItemHeader date={props.date} type={'Income'} total={totalIncome} />
          {props.income
            .filter((v) => v.date === props.date)
            .map((income) => (
              <Item key={income.id} memo={income.memo} money={income.money} />
            ))}
        </div>
      ) : (
        ''
      )}

      {totalExpenses.money > 0 ? (
        <div className="my-4 py-1 bg-LightYellow1 rounded-lg">
          <ItemHeader
            date={props.date}
            type={'Expenses'}
            total={totalExpenses}
          />
          {props.expenses
            .filter((v) => v.date === props.date)
            .map((expense) => (
              <Item
                key={expense.id}
                memo={expense.memo}
                money={expense.money}
              />
            ))}
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default Index

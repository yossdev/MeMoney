import Item from './Item'
import ItemHeader from './ItemHeader'

const ItemList = (props) => {
  const totalIncome = props.data
    .filter((v) => v.date === props.date && v.type === 'Income')
    .reduce(
      (a, b) => {
        return { money: a.money + b.money } // returns object with property money
      },
      { money: 0 }
    )

  const totalExpenses = props.data
    .filter((v) => v.date === props.date && v.type === 'Expenses')
    .reduce(
      (a, b) => {
        return { money: a.money + b.money } // returns object with property money
      },
      { money: 0 }
    )

  return (
    <>
      {totalIncome.money || totalExpenses.money > 0 ? (
        <div className="my-4 py-1 bg-LightYellow1 rounded-lg">
          <ItemHeader
            date={props.date}
            totalIncome={totalIncome}
            totalExpenses={totalExpenses}
          />
          {props.data
            .filter((v) => v.date === props.date)
            .map((data) => (
              <Item key={data.id} data={data} money={data.money} />
            ))}
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default ItemList

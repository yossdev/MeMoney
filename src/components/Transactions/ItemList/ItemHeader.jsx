const ItemHeader = (props) => {
  return (
    <>
      <section className="flex justify-between px-4">
        <span className="text-sm">{props.date}</span>
        <span className="flex justify-between">
          {props.totalIncome.money > 0 ? (
            <span className="text-sm pl-2.5">
              Income: {props.totalIncome.money}
            </span>
          ) : (
            ''
          )}
          {props.totalExpenses.money > 0 ? (
            <span className="text-sm pl-2.5">
              Expenses: {props.totalExpenses.money * -1}
            </span>
          ) : (
            ''
          )}
        </span>
      </section>
      <hr className="border-Yellow1 pb-1.5" />
    </>
  )
}

export default ItemHeader

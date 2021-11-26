const ItemHeader = (props) => {
  return (
    <>
      <section className="flex justify-between px-3">
        <span className="text-sm">{props.date}</span>
        <span className="text-sm">
          {props.type}: {props.total.money}
        </span>
      </section>
      <hr className="border-Yellow1 pb-1" />
    </>
  )
}

export default ItemHeader

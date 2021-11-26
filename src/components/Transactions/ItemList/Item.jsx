const Item = (props) => {
  return (
    <div className="flex justify-between py-1 px-4">
      <span>{props.data.memo}</span>
      {props.data.type === 'Income' ? (
        <span>{props.money}</span>
      ) : (
        <span>{props.money * -1}</span>
      )}
    </div>
  )
}

export default Item

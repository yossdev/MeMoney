const Item = (props) => {
  return (
    <div className="flex justify-between py-1 px-3">
      <span>{props.memo}</span>
      <span>{props.money}</span>
    </div>
  )
}

export default Item

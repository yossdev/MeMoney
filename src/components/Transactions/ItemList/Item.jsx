import useComponentVisible from '../../../Hooks/useComponentVisible'
import EditTransactionModal from '../../EditTransactionModal'

const Item = (props) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false)

  // const handleEditTransaction = (e) => {
  //
  // }

  return (
    <div className="flex justify-between py-1 px-4">
      <button type="button" onClick={setIsComponentVisible}>
        <span>{props.data.memo}</span>
      </button>

      <div ref={ref}>
        {isComponentVisible && (
          <EditTransactionModal
            setIsComponentVisible={setIsComponentVisible}
            transaction={props.data}
          />
        )}
      </div>

      {props.data.type === 'Income' ? (
        <span>{props.money}</span>
      ) : (
        <span>{props.money * -1}</span>
      )}
    </div>
  )
}

export default Item

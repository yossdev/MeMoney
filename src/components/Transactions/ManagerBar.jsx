import { HiOutlinePlusSm } from 'react-icons/hi'
import FilterMonth from '../FilterMonth'
import NewTransactionModal from '../NewTransactionModal'
import useComponentVisible from '../../Hooks/useComponentVisible'

const ManagerBar = (props) => {
  const { budgets } = props

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false)

  return (
    <>
      <section className="py-5" />
      <figure className="flex justify-between items-center bg-LightYellow2 px-5 py-3 my-5 rounded-xl">
        <button type="button" aria-label="add transactions modal">
          <h2 className="text-BlackGrey2">My Budgets</h2>
        </button>

        <FilterMonth />

        <button
          type="button"
          aria-label="add transactions modal"
          onClick={setIsComponentVisible}
        >
          <HiOutlinePlusSm
            color="white"
            size="2rem"
            className="p-1 rounded-full bg-Orange1 shadow-md border-md"
          />
        </button>
      </figure>

      <div ref={ref}>
        {isComponentVisible && (
          <NewTransactionModal
            setIsComponentVisible={setIsComponentVisible}
            budgets={budgets}
          />
        )}
      </div>
    </>
  )
}

export default ManagerBar

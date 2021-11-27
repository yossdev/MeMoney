import { HiOutlinePlusSm } from 'react-icons/hi'
// import DatesDropdown from '../DatesDropdown'
import FilterMonth from '../DatesDropdown/FilterMonth'

const ManagerBar = () => {
  return (
    <>
      <section className="py-5" />
      <figure className="flex justify-between items-center bg-LightYellow2 px-5 py-3 my-5 rounded-xl">
        <button type="button" aria-label="add transactions modal">
          <h2 className="text-BlackGrey2">My Budgets</h2>
        </button>

        {/*<button type="button" aria-label="add transactions modal">*/}
        {/*  <h2 className="text-BlackGrey2">Date</h2>*/}
        {/*</button>*/}

        <FilterMonth />

        {/*<DatesDropdown />*/}

        <button type="button" aria-label="add transactions modal">
          <HiOutlinePlusSm
            color="white"
            size="2rem"
            className="p-1 rounded-full bg-Orange1 shadow-md border-md"
          />
        </button>
      </figure>
    </>
  )
}

export default ManagerBar

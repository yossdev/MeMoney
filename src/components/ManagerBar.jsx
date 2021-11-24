import { HiOutlinePlusSm } from 'react-icons/hi'

const ManagerBar = () => {
  return (
    <>
      <section className="py-5" />
      <figure className="flex justify-between items-center bg-yellow-50 px-5 py-3 my-5 rounded-xl">
        <div>Budget</div>
        <div>Date</div>
        <button type="button" aria-label="add transactions modal">
          <HiOutlinePlusSm
            color="white"
            size="2rem"
            className="p-1 rounded-full bg-yellow-600 shadow-md border-md"
          />
        </button>
      </figure>
    </>
  )
}

export default ManagerBar

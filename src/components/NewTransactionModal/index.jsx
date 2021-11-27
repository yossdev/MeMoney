import { useState } from 'react'

const NewTransactionModal = () => {
  const [type, setType] = useState(false)

  return (
    <div className="container mx-auto my-1 p-5 flex-col items-center bg-WhiteBG1 shadow border-md rounded-lg">
      <div className="text-center font-semibold">New Transaction</div>

      <div className="my-5">
        <div className="flex items-center">
          <span>Category</span>
          <div className="p-2">
            <select className="bg-WhiteBG2 rounded-md px-2 m-2">
              <option>Income</option>
              <option>Expenses</option>
            </select>
            <select className="bg-WhiteBG2 rounded-md px-2 m-2">
              {type ? (
                <>
                  <option>Salary</option>
                  <option>Awards</option>
                  <option>Others</option>
                </>
              ) : (
                <>
                  <option>Bills</option>
                  <option>Entertainment</option>
                  <option>Others</option>
                </>
              )}
            </select>
          </div>
        </div>

        <div className="flex items-center">
          <span>Memo</span>
          <div className="p-2">
            <input
              maxLength="35"
              placeholder="Enter here"
              className="bg-WhiteBG2 p-1"
            />
          </div>
        </div>

        <div className="flex items-center">
          <span>Money</span>
          <div className="p-2">
            <input
              type="number"
              maxLength="8"
              placeholder="Enter here"
              className="bg-WhiteBG2 p-1"
            />
          </div>
        </div>

        <div className="flex items-center">
          <span>Date</span>
          <div className="p-2">
            <input type="date" className="bg-WhiteBG2 p-1" />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          className="bg-BlackGrey1 p-1 px-3 mx-2 text-WhiteBG1 rounded-full"
        >
          Cancel
        </button>
        <button
          type="button"
          className="bg-Orange1 p-1 px-3 mx-2 text-WhiteBG1 rounded-full"
        >
          Oke
        </button>
      </div>
    </div>
  )
}

export default NewTransactionModal

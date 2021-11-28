import { useState } from 'react'

import { MdDeleteForever } from 'react-icons/md'

const EditTransactionModal = ({ setIsComponentVisible, transaction }) => {
  const [type, setType] = useState(false)
  const [inputDate, setInputDate] = useState(null)

  const handleDate = (e) => {
    setInputDate(e.target.value)
    // console.log(inputDate)
  }

  const handleSelect = (e) => {
    const name = e.target.name
    const value = e.target.value
    setType(!type)
  }

  // console.log(transaction)

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-BlackGrey1 bg-opacity-50">
      <div className="lg:container lg:w-2/3 md:w-3/4 mx-auto flex-col items-center my-1 p-5 bg-WhiteBG1 shadow border-md rounded-lg">
        <div className="text-center font-semibold my-4">Details</div>

        <table className="table-fixed">
          <tbody>
            <tr>
              <td className="w-auto px-3">Category</td>
              <td className="w-full">
                <div className="md:flex grid p-2">
                  <select
                    className="bg-WhiteBG2 rounded-md px-2 py-1.5 mx-1 my-2"
                    onChange={handleSelect}
                  >
                    <option value="Income">Income</option>
                    <option value="Expenses">Expenses</option>
                  </select>

                  <select className="bg-WhiteBG2 rounded-md px-2 py-1.5 mx-1 my-2">
                    {type ? (
                      <>
                        <option value="Salary">Salary</option>
                        <option value="Awards">Awards</option>
                        <option value="Others">Others</option>
                      </>
                    ) : (
                      <>
                        <option value="Bills">Bills</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Others">Others</option>
                      </>
                    )}
                  </select>
                </div>
              </td>
            </tr>
            <tr>
              <td className="w-auto px-3">Memo</td>
              <td className="w-full">
                <div className="p-2">
                  <input
                    maxLength="35"
                    placeholder="Enter here"
                    className="w-full bg-WhiteBG2 p-2 mx-1"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="w-auto px-3">Money</td>
              <td className="w-full">
                <div className="p-2">
                  <input
                    type="number"
                    min="1"
                    maxLength="8"
                    placeholder="Enter here"
                    className="w-full bg-WhiteBG2 p-2 mx-1"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="w-auto px-3">Date</td>
              <td className="w-full">
                <div className="p-2">
                  <input
                    type="date"
                    className="w-full bg-WhiteBG2 p-2 mx-1"
                    onChange={handleDate}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-between mt-14 mb-3">
          <div>
            <button
              type="button"
              className="bg-LightYellow2 rounded-full p-1"
              aria-label="Delete"
            >
              <MdDeleteForever color="red" size="1.75rem" />
            </button>
          </div>
          <div>
            <button
              type="button"
              className="bg-BlackGrey1 p-1 px-3 mx-2 text-WhiteBG1 rounded-full"
              onClick={() => setIsComponentVisible(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="bg-Orange1 p-1 px-3 mx-2 text-WhiteBG1 rounded-full"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditTransactionModal

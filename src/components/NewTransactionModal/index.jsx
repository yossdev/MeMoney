import { useState } from 'react'

const NewTransactionModal = ({ setIsComponentVisible }) => {
  const curr = new Date()
  curr.setDate(curr.getDate() + 1)
  const date = curr.toISOString().substr(0, 10)

  const [type, setType] = useState(true)
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

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-BlackGrey1 bg-opacity-50">
      <div className="lg:container lg:w-2/3 md:w-3/4 mx-auto flex-col items-center my-1 p-5 bg-WhiteBG1 shadow border-md rounded-lg">
        <div className="text-center font-semibold my-4">New Transaction</div>

        <table className="table-fixed">
          <tbody>
            <tr>
              <td className="w-auto px-3">Category</td>
              <td className="w-full">
                <div className="p-2">
                  <select
                    className="bg-WhiteBG2 rounded-md px-2 py-1.5"
                    onChange={handleSelect}
                  >
                    <option value="Income">Income</option>
                    <option value="Expenses">Expenses</option>
                  </select>

                  <select className="bg-WhiteBG2 rounded-md px-2 py-1.5 ml-3">
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
                    className="w-full bg-WhiteBG2 p-2"
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
                    className="w-full bg-WhiteBG2 p-2"
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
                    className="w-full bg-WhiteBG2 p-2"
                    defaultValue={date}
                    onChange={handleDate}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-end mt-14 mb-3">
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
            Oke
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewTransactionModal

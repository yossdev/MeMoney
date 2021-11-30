import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { INSERT_TRANSACTION } from '../../GraphQL/Mutation'
import { GET_TRANSACTIONS } from '../../GraphQL/Query'

import Error from '../../pages/Errors/Error'

const NewTransactionModal = (props) => {
  const { budgets, setIsComponentVisible } = props

  const curr = new Date()
  curr.setDate(curr.getDate())
  const date = curr.toISOString().substr(0, 10)

  const DefaultInput = {
    budget_id: budgets.id,
    type: 'Income',
    income_categories: 'Salary',
    expense_categories: 'Bills',
    memo: '',
    money: 0,
    date: date,
  }

  const [newTransaction, { loading: loadingInsert, error }] = useMutation(
    INSERT_TRANSACTION,
    {
      refetchQueries: [GET_TRANSACTIONS],
    }
  )

  const [disabled, setDisabled] = useState(true)
  const [input, setInput] = useState(DefaultInput)

  const handleSelect = (e) => {
    handleOnChange(e)
  }

  const handleOnChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
    // console.log('onchange', input)

    if (input.memo.trim() !== '' && input.money > 0) {
      setDisabled(false)
    }
  }

  const handleSubmit = () => {
    if (input.money === '') {
      document.getElementById('money').focus()
      // alert('lengkapi dengan benar')
      return
    }
    if (input.type === 'Income') {
      delete input.expense_categories
    } else {
      delete input.income_categories
    }
    insertTransaction(input)
    setInput(DefaultInput)
    setDisabled(true)

    // console.log(input)
  }

  const insertTransaction = (data) => {
    newTransaction({ variables: { object: data } })
  }

  if (error) return <Error />
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-BlackGrey1 bg-opacity-50">
      <div className="lg:container lg:w-2/3 md:w-3/4 mx-auto flex-col items-center my-1 p-5 bg-WhiteBG1 shadow border-md rounded-lg">
        <div className="text-center font-semibold my-4">New Transaction</div>

        {loadingInsert ? (
          <div>On process ...</div>
        ) : (
          <>
            <table className="table-fixed">
              <tbody>
                <tr>
                  <td className="w-auto px-3">Category</td>
                  <td className="w-full">
                    <div className="md:flex grid p-2">
                      <select
                        id="type"
                        name="type"
                        className="bg-WhiteBG2 rounded-md px-2 py-1.5 mx-1 my-2"
                        onChange={handleSelect}
                        defaultValue={'Income'}
                      >
                        <option value="Income">Income</option>
                        <option value="Expenses">Expenses</option>
                      </select>

                      {input.type === 'Income' ? (
                        <select
                          id="income_categories"
                          name="income_categories"
                          className="bg-WhiteBG2 rounded-md px-2 py-1.5 mx-1 my-2"
                          defaultValue={'Salary'}
                          onChange={handleOnChange}
                        >
                          <option value="Salary">Salary</option>
                          <option value="Investment">Investment</option>
                          <option value="Awards">Awards</option>
                          <option value="Grants">Grants</option>
                          <option value="Others">Others</option>
                        </select>
                      ) : (
                        <select
                          id="expense_categories"
                          name="expense_categories"
                          className="bg-WhiteBG2 rounded-md px-2 py-1.5 mx-1 my-2"
                          onChange={handleOnChange}
                          defaultValue={'Bills'}
                        >
                          <option value="Bills">Bills</option>
                          <option value="Food">Food</option>
                          <option value="Transportation">Transportation</option>
                          <option value="Entertainment">Entertainment</option>
                          <option value="Others">Others</option>
                        </select>
                      )}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="w-auto px-3">Memo</td>
                  <td className="w-full">
                    <div className="p-2">
                      <input
                        id="memo"
                        name="memo"
                        maxLength="100"
                        placeholder="Enter here"
                        className="w-full bg-WhiteBG2 p-2 mx-1"
                        onChange={handleOnChange}
                        required
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="w-auto px-3">Money</td>
                  <td className="w-full">
                    <div className="p-2">
                      <input
                        id="money"
                        name="money"
                        type="number"
                        min="1"
                        maxLength="8"
                        placeholder="Enter here"
                        className="w-full bg-WhiteBG2 p-2 mx-1"
                        onChange={handleOnChange}
                        required
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="w-auto px-3">Date</td>
                  <td className="w-full">
                    <div className="p-2">
                      <input
                        name="date"
                        type="date"
                        className="w-full bg-WhiteBG2 p-2 mx-1"
                        defaultValue={date}
                        onChange={handleOnChange}
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
                Close
              </button>
              <button
                type="button"
                className={
                  disabled
                    ? 'bg-WhiteBG2 p-1 px-3 mx-2 text-WhiteBG1 rounded-full'
                    : 'bg-Orange1 p-1 px-3 mx-2 text-WhiteBG1 rounded-full'
                }
                disabled={disabled}
                onClick={handleSubmit}
              >
                Oke
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default NewTransactionModal

import { useState } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { useMutation } from '@apollo/client'
import { DELETE_TRANSACTION, UPDATE_TRANSACTION } from '../../GraphQL/Mutation'
import {
  GET_TRANSACTIONS_BY_DATE,
  GET_TRANSACTIONS_SUM_EXPENSES,
  GET_TRANSACTIONS_SUM_INCOME,
} from '../../GraphQL/Query'

import Error from '../../pages/Errors/Error'

const EditTransactionModal = (props) => {
  const { setIsComponentVisible, transaction } = props

  const DefaultEdit = {
    budget_id: transaction.budget_id,
    type: transaction.type,
    income_categories: transaction.income_categories,
    expense_categories: transaction.expense_categories,
    memo: transaction.memo,
    money: transaction.money,
    date: transaction.date,
  }

  const [editTransaction, { loading: loadingEdit, error: errorEdit }] =
    useMutation(UPDATE_TRANSACTION, {
      refetchQueries: [
        GET_TRANSACTIONS_BY_DATE,
        GET_TRANSACTIONS_SUM_INCOME,
        GET_TRANSACTIONS_SUM_EXPENSES,
      ],
      awaitRefetchQueries: true,
    })

  const [deleteTransaction, { loading: loadingDelete, error: errorDelete }] =
    useMutation(DELETE_TRANSACTION, {
      refetchQueries: [
        GET_TRANSACTIONS_BY_DATE,
        GET_TRANSACTIONS_SUM_INCOME,
        GET_TRANSACTIONS_SUM_EXPENSES,
      ],
      awaitRefetchQueries: true,
    })

  const [disabled, setDisabled] = useState(false)
  const [inputEdit, setInputEdit] = useState(DefaultEdit)

  const handleSelect = (e) => {
    handleOnChange(e)
  }

  const handleOnChange = (e) => {
    setInputEdit({
      ...inputEdit,
      [e.target.name]: e.target.value,
    })
    // console.log('onchange', input)

    if (inputEdit.memo.trim() === '' || inputEdit.money <= 0) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }

  const handleUpdate = () => {
    if (inputEdit.money === '') {
      document.getElementById('money').focus()
      // alert('lengkapi dengan benar')
      return
    }
    if (inputEdit.type === 'Income') {
      delete inputEdit.expense_categories
    } else {
      delete inputEdit.income_categories
    }
    updateTransaction(inputEdit)
    setDisabled(true)

    // console.log(inputEdit)
  }

  const updateTransaction = (update) => {
    editTransaction({
      variables: { id: transaction.id, _set: update },
    })
  }

  const handleDelete = (id) => {
    deleteTransaction({ variables: { id: id } })
    setDisabled(true)
  }

  // DEBUG
  // console.log(transaction.id)
  // console.log(inputEdit)
  // console.log(transaction)

  if (errorEdit) return <Error />
  if (errorDelete) return <Error />

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-BlackGrey1 bg-opacity-50">
      <div className="lg:container lg:w-2/3 md:w-3/4 mx-auto flex-col items-center my-1 p-5 bg-WhiteBG1 shadow border-md rounded-lg">
        <div className="text-center font-semibold my-4">Details</div>

        {loadingEdit || loadingDelete ? (
          <div>On process ...</div>
        ) : (
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
                      defaultValue={DefaultEdit.type}
                    >
                      <option value="Income">Income</option>
                      <option value="Expenses">Expenses</option>
                    </select>

                    {inputEdit.type === 'Income' ? (
                      <select
                        id="income_categories"
                        name="income_categories"
                        className="bg-WhiteBG2 rounded-md px-2 py-1.5 mx-1 my-2"
                        defaultValue={
                          !DefaultEdit.income_categories
                            ? 'Salary'
                            : DefaultEdit.income_categories
                        }
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
                        defaultValue={
                          !DefaultEdit.expense_categories
                            ? 'Bills'
                            : DefaultEdit.expense_categories
                        }
                        onChange={handleOnChange}
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
                      value={inputEdit.memo}
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
                      value={inputEdit.money}
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
                      value={inputEdit.date}
                      onChange={handleOnChange}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        )}

        <div className="flex justify-between mt-14 mb-3">
          <div>
            {loadingEdit ? (
              ''
            ) : (
              <button
                type="button"
                className="bg-LightYellow2 rounded-full p-1"
                aria-label="Delete"
                onClick={() => handleDelete(transaction.id)}
              >
                <MdDeleteForever color="red" size="1.75rem" />
              </button>
            )}
          </div>
          <div>
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
              onClick={handleUpdate}
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

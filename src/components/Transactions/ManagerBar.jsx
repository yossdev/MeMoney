import { HiOutlinePlusSm } from 'react-icons/hi'
import { MdCancel } from 'react-icons/md'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { useState } from 'react'
import { UPDATE_BUDGETS_TITLE } from '../../GraphQL/Mutation'
import {
  GET_TRANSACTIONS_BY_DATE,
  GET_TRANSACTIONS_SUM_EXPENSES,
  GET_TRANSACTIONS_SUM_INCOME,
} from '../../GraphQL/Query'

import FilterMonth from '../FilterMonth'
import NewTransactionModal from '../NewTransactionModal'
import useComponentVisible from '../../Hooks/useComponentVisible'
import { useMutation } from '@apollo/client'
import Error from '../../pages/Errors/Error'
import Loading from '../Loading'

const ManagerBar = (props) => {
  const { budgets, month, year, handleChange } = props

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false)

  const [editState, setEditState] = useState(false)
  const [newTitle, setNewTitle] = useState(budgets.title)

  const [updateTitle, { loading, error }] = useMutation(UPDATE_BUDGETS_TITLE, {
    refetchQueries: [
      GET_TRANSACTIONS_BY_DATE,
      GET_TRANSACTIONS_SUM_INCOME,
      GET_TRANSACTIONS_SUM_EXPENSES,
    ],
    awaitRefetchQueries: true,
  })

  if (loading) return <Loading />

  const handleUpdateTitle = () => {
    if (newTitle.trim() === '') {
      document.getElementById('editTitle').focus()
      return
    }
    updateTitle({ variables: { id: budgets.id, title: newTitle } })
    setEditState(false)
  }

  const handleCancel = () => {
    setNewTitle(budgets.title)
    setEditState(false)
  }

  const onEdit = (e) => {
    setNewTitle(e.target.value)
    console.log(newTitle)
  }

  if (error) return <Error />

  return (
    <>
      <section className="py-5" />
      <figure className="flex justify-between items-center bg-LightYellow2 px-5 py-3 mt-5 rounded-xl">
        {loading ? (
          <p>Loading</p>
        ) : (
          <button type="button" onClick={() => setEditState(true)}>
            <h2 className="text-BlackGrey1 font-medium">{newTitle}</h2>
          </button>
        )}

        <FilterMonth month={month} year={year} handleChange={handleChange} />

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

      <div className="mx-2">
        {editState && (
          <div className="flex item-center">
            <input
              id="editTitle"
              maxLength="15"
              value={newTitle}
              className="bg-WhiteBG2 p-2 rounded-b-lg"
              onChange={onEdit}
              required
            />
            <button
              type="button"
              className="mx-2.5"
              aria-label="update"
              onClick={handleUpdateTitle}
            >
              <BsFillPatchCheckFill color={'green'} size={'20px'} />
            </button>
            <button
              type="button"
              className="mx-2.5"
              aria-label="close"
              onClick={handleCancel}
            >
              <MdCancel color={'red'} size={'20px'} />
            </button>
          </div>
        )}
      </div>

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

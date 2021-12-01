import { gql } from '@apollo/client'

const INSERT_TRANSACTION = gql`
  mutation MyMutation($object: transactions_insert_input = {}) {
    insert_transactions_one(object: $object) {
      created_at
    }
  }
`

const UPDATE_TRANSACTION = gql`
  mutation MyMutation($id: bigint!, $_set: transactions_set_input = {}) {
    update_transactions_by_pk(pk_columns: { id: $id }, _set: $_set) {
      updated_at
    }
  }
`

const DELETE_TRANSACTION = gql`
  mutation MyMutation($id: bigint!) {
    delete_transactions_by_pk(id: $id) {
      id
    }
  }
`

const UPDATE_BUDGETS_TITLE = gql`
  mutation MyMutation($id: bigint!, $title: String!) {
    update_budgets_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {
      title
    }
  }
`

export {
  INSERT_TRANSACTION,
  UPDATE_TRANSACTION,
  DELETE_TRANSACTION,
  UPDATE_BUDGETS_TITLE,
}

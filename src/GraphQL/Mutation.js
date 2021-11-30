import { gql } from '@apollo/client'

const INSERT_TRANSACTION = gql`
  mutation MyMutation($object: transactions_insert_input = {}) {
    insert_transactions_one(object: $object) {
      created_at
    }
  }
`

export { INSERT_TRANSACTION }

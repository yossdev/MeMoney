import { gql } from '@apollo/client'

const GET_USER = gql`
  query MyQuery {
    users {
      id
      name
      email
      picture
      created_at
      budgets {
        id
        title
      }
    }
  }
`

const GET_TRANSACTIONS = gql`
  query MyQuery {
    users {
      budgets {
        transactions {
          id
          memo
          money
          type
          date
        }
      }
    }
  }
`

export { GET_USER, GET_TRANSACTIONS }

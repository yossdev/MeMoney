import { gql } from '@apollo/client'

const GET_USER = gql`
  query MyQuery {
    users {
      id
      name
      email
      picture
      created_at
    }
  }
`

const GET_TRANSACTIONS = gql`
  query MyQuery {
    users {
      budgets {
        id
        title
        transactions(distinct_on: id) {
          id
          memo
          money
          type
          date
          expense_categories
          income_categories
        }
      }
    }
  }
`

export { GET_USER, GET_TRANSACTIONS }

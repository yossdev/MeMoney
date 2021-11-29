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

export { GET_USER }

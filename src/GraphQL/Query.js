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

const GET_TRANSACTIONS_BY_DATE = gql`
  query MyQuery(
    $id: bigint_comparison_exp = {}
    $date: date_comparison_exp = {}
  ) {
    users {
      budgets(where: { id: $id }) {
        id
        title
        transactions(distinct_on: id, where: { date: $date }) {
          id
          budget_id
          type
          date
          memo
          money
          expense_categories
          income_categories
        }
      }
    }
  }
`

const GET_TRANSACTIONS_SUM_INCOME = gql`
  query MyQuery2(
    $id: bigint_comparison_exp = {}
    $date: date_comparison_exp = {}
  ) {
    users {
      budgets(where: { id: $id }) {
        transactions_aggregate(
          where: { _and: { type: { _eq: Income }, date: $date } }
        ) {
          aggregate {
            sum {
              money
            }
          }
        }
      }
    }
  }
`

const GET_TRANSACTIONS_SUM_EXPENSES = gql`
  query MyQuery3(
    $id: bigint_comparison_exp = {}
    $date: date_comparison_exp = {}
  ) {
    users {
      budgets(where: { id: $id }) {
        transactions_aggregate(
          where: { _and: { type: { _eq: Expenses }, date: $date } }
        ) {
          aggregate {
            sum {
              money
            }
          }
        }
      }
    }
  }
`

const GET_INCOME_EXPENSES_CATEGORIES_BY_MONTH = gql`
  query MyQuery(
    $id: bigint_comparison_exp = {}
    $date: date_comparison_exp = {}
  ) {
    users {
      budgets(where: { id: $id }) {
        transactions(where: { date: $date }) {
          income_categories
          expense_categories
          money
        }
      }
    }
  }
`

export {
  GET_USER,
  GET_TRANSACTIONS_BY_DATE,
  GET_TRANSACTIONS_SUM_INCOME,
  GET_TRANSACTIONS_SUM_EXPENSES,
  GET_INCOME_EXPENSES_CATEGORIES_BY_MONTH,
}

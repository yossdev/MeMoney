import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  ApolloLink,
  concat,
} from '@apollo/client'
import { Router } from 'react-router-dom'
import inMemoryJWT from './jwt/inMemoryJWT'

let appJWTToken = inMemoryJWT.getToken()

const httpLink = new HttpLink({ uri: process.env.REACT_APP_HASURA_URI })
const authMiddleware = new ApolloLink((operation, forward) => {
  if (appJWTToken) {
    operation.setContext({
      headers: {
        Authorization: `Bearer ${appJWTToken}`,
      },
    })
  } else {
    Router.push('/')
  }
  return forward(operation)
})

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
})

// const client = new ApolloClient({
//   uri: process.env.REACT_APP_HASURA_URI, //* change this with url endpoint form hasura
//   headers: {
//     'content-type': 'application/json',
//     'x-hasura-admin-secret': process.env.REACT_APP_HASURA_ADMIN,
//     Authorization: `Bearer ${jwt}`,
//   },
//   cache: new InMemoryCache(),
// })

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

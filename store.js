import { configureStore } from '@reduxjs/toolkit'
import transactionReducer from './features/transactions'

export const store = configureStore({
  reducer: {
    transactions: transactionReducer,
  },
})
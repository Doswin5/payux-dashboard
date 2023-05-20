import { createSlice } from '@reduxjs/toolkit'
import { transactions } from '@/constants'

const initialState = {
  value: {
    transactions,
    toggleTab: 'all',
    filteredStatus: 'all',
    searchId: '',
    transactionsDisplayed: [],
    results: '',
  }
}

export const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
    setToggleTab: (state, action) => {
      state.value.toggleTab = action.payload
    },
    setFilteredStatus: (state, action) => {
      state.value.filteredStatus = action.payload
    },
    setSearchId: (state, action) => {
      state.value.searchId = action.payload
    }


  },
})

// Action creators are generated for each case reducer function
export const { setToggleTab, setFilteredStatus, setSearchId } = transactionSlice.actions

export default transactionSlice.reducer
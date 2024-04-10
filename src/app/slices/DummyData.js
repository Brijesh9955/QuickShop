import { createSlice } from '@reduxjs/toolkit'

export const DummyData = createSlice({
  name: 'DummyData',
  initialState: {
    value: 0,
    data: []
  },
  reducers: {
    addData: (state, action) => {
      state.data = [...state.data, ...action.payload]
    },
    deleteData: (state, action) => {
        let copyData = [...state.data]
        copyData.splice(action.payload, 1)
        state.data = copyData
    },

  }
})

// Action creators are generated for each case reducer function
export const { addData, deleteData } = DummyData.actions

export default DummyData.reducer
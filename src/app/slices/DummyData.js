import { createSlice } from '@reduxjs/toolkit'



// useSelector
// useDispatch

export const DummyData = createSlice({
  name: 'DummyData',
  initialState: {
    value: 0,
    data: []
  },
  reducers: {
    addData: (state, action) => {
      state.data = [...state.data, ...action.payload]
      console.log("state.data", state.data);
    },
    deleteData: (state, action) => {
        let copyData = [...state.data]
        copyData.splice(action.payload, 1)
        state.data = copyData
      }
  }
})

// Action creators are generated for each case reducer function
export const { addData, deleteData } = DummyData.actions

export default DummyData.reducer
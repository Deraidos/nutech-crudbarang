import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { randomUUID } from 'crypto'

// interface BarangState {
//   value: any
// }

const initialState = {
  value: [],
}

export const barangSlice = createSlice({
  name: 'barang',
  initialState,
  reducers: {
    addBarang: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload)
    },
  },
})

export const { addBarang } = barangSlice.actions

export default barangSlice.reducer

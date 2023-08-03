import { Barang } from '@/interfaces'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface BarangState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any
}

const initialState: BarangState = {
  value: [],
}

export const barangSlice = createSlice({
  name: 'barang',
  initialState,
  reducers: {
    addBarang: (state, action: PayloadAction) => {
      state.value.push(action.payload)
    },
    deleteBarang: (state, action: PayloadAction<Barang>) => {
      state.value.pop(action.payload)
    },
  },
})

export const { addBarang, deleteBarang } = barangSlice.actions

export default barangSlice.reducer

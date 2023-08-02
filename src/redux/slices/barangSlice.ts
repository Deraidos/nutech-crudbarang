import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { randomUUID } from 'crypto'

// interface BarangState {
//   value: any
// }

const initialState = {
  value: [
    {
      id: 1,
      namaBarang: 'Kipas Angin',
      hargaBeli: '10000',
      hargaJual: '20000',
      stok: '10',
    },
    {
      id: 2,
      namaBarang: 'Air Conditioner',
      hargaBeli: '20000',
      hargaJual: '30000',
      stok: '5',
    },
    {
      id: nanoid(),
      namaBarang: 'Air Bender',
      hargaBeli: '20000',
      hargaJual: '30000',
      stok: '5',
    },
  ],
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

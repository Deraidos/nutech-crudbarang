import { Barang } from '@/interfaces'
import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'

interface BarangState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any
}

const initialState: BarangState = {
  value: [
    {
      id: nanoid(),
      namaBarang: 'Kipas Angin',
      hargaBeli: 10,
      hargaJual: 20,
      stok: 10,
    },
    {
      id: nanoid(),
      namaBarang: 'Air Conditioner',
      hargaBeli: 50,
      hargaJual: 100,
      stok: 5,
    },
  ],
}

export const barangSlice = createSlice({
  name: 'barang',
  initialState,
  reducers: {
    addBarang: (state, action: PayloadAction) => {
      state.value.push(action.payload)
    },
    deleteBarang: (state, action: PayloadAction<Barang>) => {
      return state.value.filter((barang) => barang.id !== action.payload)
      // state.value = state.value.filter((barang) => barang.id !== action.payload)
      // const { id } = action.payload
      // const currentBarang = state.value.find((barang) => barang.id === id)
      // if (currentBarang) {
      //   return state.value.filter((barang) => barang.id !== id)
      // }
    },
  },
})

export const { addBarang, deleteBarang } = barangSlice.actions

export default barangSlice.reducer

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
      foto: `https://images.pexels.com/photos/3675622/pexels-photo-3675622.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400`,
    },
    {
      id: nanoid(),
      namaBarang: 'Air Conditioner',
      hargaBeli: 50,
      hargaJual: 100,
      stok: 5,
      foto: `https://media.istockphoto.com/id/1319273649/photo/portable-air-conditioner-in-the-office-connected-to-an-outlet.jpg?s=612x612&w=0&k=20&c=RzzzVDU6dfdQS9iVvYveftiM8QcTRwR9LhmrQe4MbLo=`,
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
      // const idToDelete = action.payload.id
      // state.value = state.value.filter((barang) => barang.id !== idToDelete)
      state.value = state.value.filter(
        (barang) => barang.id !== action.payload.id
      )
    },
    editBarang: (state, action: PayloadAction<Barang>) => {
      const updatedBarang = action.payload
      state.value = state.value.map((barang) =>
        barang.id === updatedBarang.id ? updatedBarang : barang
      )
    },
  },
})

export const { addBarang, deleteBarang, editBarang } = barangSlice.actions

export default barangSlice.reducer

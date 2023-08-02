import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BarangState {
  item: any
}

const initialState: BarangState = {
  item: [], 
}

export const barangSlice = createSlice({
  name: "Barang",
  initialState,
  reducers: {
    addBarang: (state, action: PayloadAction<string>) => {
      state.item.push(...action.payload)
    }
  }
})

export default barangSlice.reducer
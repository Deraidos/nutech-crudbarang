export interface Barang {
  namaBarang: string
  hargaBeli: number
  hargaJual: number
  stok: number
  foto: JSX.Element | null
}

export interface FormTambahBarangProps {
  barang: Barang | null
}

export interface Barang {
  id: string
  namaBarang: string
  hargaBeli: number
  hargaJual: number
  stok: number
  foto: JSX.Element | null
}

export interface FormTambahBarangProps {
  barang: Barang | null
}

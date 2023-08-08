export interface Barang {
  id?: number
  namaBarang: string
  hargaBeli: number
  hargaJual: number
  stok: number
  foto?: string | null
}

export interface FormTambahBarangProps {
  barang: Barang | null
}

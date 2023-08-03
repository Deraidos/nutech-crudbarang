/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import { addBarang } from "@/redux/slices/barangSlice";
import { RootState } from "@/redux/store";
import { toast } from "react-toastify";

export default function FormTambahBarang({ barang }) {
  const [namaBarang, setNamaBarang] = useState(barang ? barang.namaBarang : '');
  const [hargaBeli, setHargaBeli] = useState(barang ? barang.hargaBeli : '');
  const [hargaJual, setHargaJual] = useState(barang ? barang.hargaJual : '');
  const [stok, setStok] = useState(barang ? barang.stok : '');
  const [foto, setFoto] = useState(null);

  const dispatch = useDispatch()
  const listBarang = useSelector(
    (state: RootState) => state.barang.value)

  const handleAddBarang = (e) => {
    e.preventDefault()
    const isNamaBarangUnique = !listBarang.some((barang) => barang.namaBarang === namaBarang);

    if (!isNamaBarangUnique) {
      alert('Barang sudah ada. Gunakan nama lain')
      return
    }

    const newBarang = {
      namaBarang,
      hargaBeli,
      hargaJual,
      stok,
      foto: <img src={`https://picsum.photos/200?random=${Math.random()}`} />
    }

    dispatch(addBarang(newBarang))

    toast('Barang ditambahkan', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      type: "success",
    });

    setNamaBarang('')
    setHargaBeli('')
    setHargaJual('')
    setStok('')
    setFoto(null)

  }

  return (
    <form onSubmit={handleAddBarang} className="flex flex-col gap-3">
      <div className="flex flex-col">
        <label>Nama Barang</label>
        <input type="text" value={namaBarang} id="namaBarang" onChange={(e) => setNamaBarang(e.target.value)} required className="border border-slate-400 h-7 rounded-sm" />
      </div>
      <div className="flex flex-col">
        <label>Harga Beli</label>
        <input type="number" value={hargaBeli} onChange={(e) => setHargaBeli(e.target.value)} required className="border border-slate-400 h-7 rounded-sm" />
      </div>
      <div className="flex flex-col">
        <label>Harga Jual</label>
        <input type="number" value={hargaJual} onChange={(e) => setHargaJual(e.target.value)} required className="border border-slate-400 h-7 rounded-sm" />
      </div>
      <div className="flex flex-col">
        <label>Stok</label>
        <input type="number" value={stok} onChange={(e) => setStok(e.target.value)} required className="border border-slate-400 h-7 rounded-sm" />
      </div>
      <Button variant="default">Tambah</Button>
    </form>
  )
}

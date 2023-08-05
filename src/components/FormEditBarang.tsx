/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { editBarang } from "@/redux/slices/barangSlice";
import { RootState } from "@/redux/store";
import { useNavigate, useParams } from "react-router-dom";

export default function FormEditBarang() {
  const { id } = useParams();
  const barang = useSelector(
    (state: RootState) => state.barang.value.find((barang) => barang.id == id))
  // const barang = listBarang.filter(b => b.id == id)

  const [namaBarang, setNamaBarang] = useState(barang ? barang.namaBarang : "");
  const [hargaBeli, setHargaBeli] = useState(barang ? barang.hargaBeli : "");
  const [hargaJual, setHargaJual] = useState(barang ? barang.hargaJual : "");
  const [stok, setStok] = useState(barang ? barang.stok : "");

  // const [foto, setFoto] = useState(null);

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleEditBarang = (e) => {
    e.preventDefault()

    // @ts-ignore
    dispatch(editBarang({
      namaBarang,
      hargaBeli,
      hargaJual,
      stok
    }))
    navigate('/')

    toast('Barang berhasil di-edit', {
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
    // setFoto(null)

  }

  return (
    <form onSubmit={handleEditBarang} className="flex flex-col gap-3">
      <div className="flex flex-col">
        <label>Nama Barang</label>
        <input type="text" value={namaBarang} id="namaBarang" onChange={(e) => setNamaBarang(e.target.value)} required className="border border-slate-400 h-7 rounded-sm" />
      </div>
      <div className="flex flex-col">
        <label>Harga Beli</label>
        <input type="number" value={hargaBeli} min={1} onChange={(e) => setHargaBeli(e.target.value)} required className="border border-slate-400 h-7 rounded-sm" />
      </div>
      <div className="flex flex-col">
        <label>Harga Jual</label>
        <input type="number" value={hargaJual} min={1} onChange={(e) => setHargaJual(e.target.value)} required className="border border-slate-400 h-7 rounded-sm" />
      </div>
      <div className="flex flex-col">
        <label>Stok</label>
        <input type="number" value={stok} onChange={(e) => setStok(e.target.value)} required className="border border-slate-400 h-7 rounded-sm" />
      </div>
      <Button variant="default">Edit</Button>
    </form>
  )
}

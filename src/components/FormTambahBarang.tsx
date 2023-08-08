/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Button } from "./ui/button";
import { toast } from "react-toastify";

// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "@/redux/store";
// import { addBarang } from "@/redux/slices/barangSlice";
import { useGetBarangQuery, useAddBarangMutation } from "@/redux/slices/apiSlice"
// import { Barang } from '../interfaces';
import { useNavigate } from "react-router-dom";


export default function FormTambahBarang({ barang }) {
  const [namaBarang, setNamaBarang] = useState(barang ? barang.namaBarang : '');
  const [hargaBeli, setHargaBeli] = useState(barang ? barang.hargaBeli : '');
  const [hargaJual, setHargaJual] = useState(barang ? barang.hargaJual : '');
  const [stok, setStok] = useState(barang ? barang.stok : '');
  // const [foto, setFoto] = useState(null);

  // const listBarang = useSelector(
  //   (state: RootState) => state.barang.value)
  const { data: listBarang } = useGetBarangQuery();
  const [addBarangMutation] = useAddBarangMutation();
  const navigate = useNavigate();

  const handleAddBarang = async (e) => {
    e.preventDefault()

    const isNamaBarangUnique = !listBarang.some((barang) => barang.namaBarang === namaBarang);

    if (!isNamaBarangUnique) {
      alert('Barang sudah ada. Gunakan nama lain')
      return
    }

    const newBarang = {
      nama_barang: namaBarang,
      harga_beli: hargaBeli,
      harga_jual: hargaJual,
      stok,
      foto: `https://picsum.photos/400?random=${Math.random()}`
    }
    try {
      const { error } = await addBarangMutation(newBarang);
      if (!error) {
        navigate('/');
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

        setTimeout(() => {
          window.location.reload()
        }, 800)
      } else {
        console.error('Error adding barang:', error);
        toast('Gagal menambahkan barang', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          type: "error",
        });
      }
    } catch (error) {
      console.error('Error adding barang:', error);
      toast('Gagal menambahkan barang', {
        // ... (toast configuration)
      });
    }

    // @ts-ignore
    // dispatch(addBarang(newBarang))

    setNamaBarang('')
    setHargaBeli('')
    setHargaJual('')
    setStok('')
    // setFoto(null)

  }

  return (
    <form onSubmit={handleAddBarang} className="flex flex-col gap-3">
      <h1 className="text-xl font-medium">Tambah Barang</h1>
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

      <Button variant="default">Tambah</Button>
    </form>
  )
}

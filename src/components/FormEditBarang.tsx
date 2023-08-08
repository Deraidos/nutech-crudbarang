/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Button } from "./ui/button";
import { toast } from "react-toastify";

// import { useDispatch, useSelector } from "react-redux";
// import { editBarang } from "@/redux/slices/barangSlice";
// import { RootState } from "@/redux/store";
import { useGetBarangQuery, useUpdateBarangMutation } from "@/redux/slices/apiSlice"
import { useNavigate, useParams } from "react-router-dom";

export default function FormEditBarang() {
  // const dispatch = useDispatch()
  // const barang = useSelector(
  //   (state: RootState) => state.barang.value.find((barang) => barang.id == id))
  // // const barang = listBarang.filter(b => b.id == id)
  const { id } = useParams();
  const { data: listBarang } = useGetBarangQuery();
  const updateBarangMutation = useUpdateBarangMutation();
  const barang = listBarang.find((barang) => barang.id === id);

  const [namaBarang, setNamaBarang] = useState(barang ? barang.nama_barang : "");
  const [hargaBeli, setHargaBeli] = useState(barang ? barang.harga_beli : "");
  const [hargaJual, setHargaJual] = useState(barang ? barang.harga_jual : "");
  const [stok, setStok] = useState(barang ? barang.stok : "");

  const navigate = useNavigate();

  const handleEditBarang = async (e) => {
    e.preventDefault()

    const updatedBarang = {
      nama_barang: namaBarang,
      harga_beli: hargaBeli,
      harga_jual: hargaJual,
      stok: stok
    }

    try {
      const { error } = await updateBarangMutation(updatedBarang)
      if (!error) {
        navigate('/');
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

        setTimeout(() => {
          window.location.reload()
        }, 800)
      }
    } catch (error) {
      console.error('Error edit barang:', error);
      navigate('/');
      toast('Gagal mengedit barang', {
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

    setNamaBarang('')
    setHargaBeli('')
    setHargaJual('')
    setStok('')
    // setFoto(null)

    // @ts-ignore
    // dispatch(editBarang({
    //   ...barang, // INFO: line 83
    //   namaBarang,
    //   hargaBeli,
    //   hargaJual,
    //   stok
    // }))

  }

  return (
    <form onSubmit={handleEditBarang} className="flex flex-col gap-3">
      <h1 className="text-xl font-medium">Edit Barang</h1>
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

 // 83: By using the spread operator, you are creating a new object with the same initial values as barang but without directly modifying the original object. This is essential when dealing with state updates in Redux or React components, as you should avoid mutating the original state directly. Instead, you create a new object with the updated values and use that new object for state updates or Redux actions.
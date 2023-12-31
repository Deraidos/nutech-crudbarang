/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "./ui/button"
import { ToastContainer, toast } from 'react-toastify';

// redux
// import { useSelector, useDispatch } from "react-redux"
// import { RootState } from "@/redux/store"
// import { deleteBarang } from "@/redux/slices/barangSlice"
import { useGetBarangQuery, useDeleteBarangMutation } from "@/redux/slices/apiSlice"
import { Link } from "react-router-dom";


export default function ListBarang() {
  // const listBarang = useSelector(
  //   (state: RootState) => state.barang.value)

  const { data: listBarang } = useGetBarangQuery();
  const [deleteBarang] = useDeleteBarangMutation();

  // const handleDelete = (id) => {
  //   if (window.confirm('Yakin ingin menghapus barang ini?')) {
  //     const barangToDelete = listBarang.find((barang) => barang.id === id)
  //     dispatch(deleteBarang(barangToDelete));
  //     toast('Barang dihapus', {
  //       position: "top-center",
  //       autoClose: 1000,
  //       hideProgressBar: true,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       type: "success",
  //     });
  //   }
  // }

  const handleDelete = async (id) => {
    if (window.confirm('Yakin ingin menghapus barang ini?')) {
      try {
        // Call the deleteBarangMutation function with the ID
        await deleteBarang(id);
        // Handle successful deletion
        console.log('Deleted barang with ID:', id);
        toast('Barang dihapus', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          type: "success",
        });
      } catch (error) {
        // Handle error if deletion fails
        console.error('Error deleting barang:', error);
        toast('Gagal menghapus barang', {
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
    }
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }

  return (
    <div className='flex flex-col gap-3 w-[100%]'>
      <h2 className='text-2xl'>List Barang</h2>
      <div className="w-[15%]">
        <Link to='/add'><Button variant='default'>Tambah Barang</Button></Link>
      </div>

      <Table>
        <ToastContainer />
        <TableHeader>
          <TableRow>
            <TableHead>Foto Barang</TableHead>
            <TableHead>Nama Barang</TableHead>
            <TableHead>Harga Beli</TableHead>
            <TableHead>Harga Jual</TableHead>
            <TableHead>Jumlah Stok</TableHead>
            <TableHead>Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {listBarang && listBarang.length ? (
            listBarang.map((barang) => (
              <TableRow key={barang.id}>
                <TableCell className="w-[25%]"><img src={barang.foto} /></TableCell>
                <TableCell className="font-medium"><p>{barang.nama_barang}</p></TableCell>
                <TableCell><p>Rp {barang.harga_beli}</p></TableCell>
                <TableCell><p>Rp {barang.harga_jual}</p></TableCell>
                <TableCell><p>{barang.stok}</p></TableCell>
                <TableCell className="flex gap-1">
                  <Link to={`/edit/${barang.id}`}><Button variant="default">Edit</Button></Link>
                  <Button variant="destructive" onClick={() => handleDelete(barang.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={8} align="center">
                <p>Tidak ada barang</p>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
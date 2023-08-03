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
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/redux/store"
import { deleteBarang } from "@/redux/slices/barangSlice"



export default function TabelBarang() {
  const dispatch = useDispatch()
  const listBarang = useSelector(
    (state: RootState) => state.barang.value)

  const handleDelete = (e) => {
    if (window.confirm('Yakin ingin menghapus barang ini?')) {
      dispatch(deleteBarang(listBarang.namaBarang));
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
    }
  }

  return (
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
        {listBarang.length == 0 ? (
          <TableRow>
            <TableCell colSpan={8} align="center">
              <p>Tidak ada barang</p>
            </TableCell>
          </TableRow>
        ) : (
          listBarang.map((barang) => (
            <TableRow key={barang.id}>
              <TableCell>{barang.foto}</TableCell>
              <TableCell className="font-medium"><p>{barang.namaBarang}</p></TableCell>
              <TableCell><p>Rp {barang.hargaBeli}</p></TableCell>
              <TableCell><p>Rp {barang.hargaJual}</p></TableCell>
              <TableCell><p>{barang.stok}</p></TableCell>
              <TableCell className="flex gap-1">
                <Button>Edit</Button>
                <Button variant="destructive" onClick={handleDelete}>Delete</Button>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>

      {/* <TableBody>
        {listBarang.map((barang) => {
          return (
            <TableRow>
              <TableCell className="font-medium">{barang.namaBarang}</TableCell>
              <TableCell>Rp {barang.hargaBeli}</TableCell>
              <TableCell>Rp {barang.hargaJual}</TableCell>
              <TableCell>{barang.stok}</TableCell>
              <TableCell className="flex gap-1">
                <Button>Edit</Button>
                <Button variant="destructive">Delete</Button>
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody> */}
    </Table>
  )
};

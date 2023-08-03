import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "./ui/button"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"

export default function TabelBarang() {

  const listBarang = useSelector(
    (state: RootState) => state.barang.value)

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
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
            <TableCell colSpan={5} align="center">
              Tidak ada barang
            </TableCell>
          </TableRow>
        ) : (
          listBarang.map((barang) => (
            <TableRow key={barang.id}>
              <TableCell>{barang.id}</TableCell>
              <TableCell><img src="https://random.imagecdn.app/200/200" alt="" /></TableCell>
              <TableCell className="font-medium">{barang.namaBarang}</TableCell>
              <TableCell>Rp {barang.hargaBeli}</TableCell>
              <TableCell>Rp {barang.hargaJual}</TableCell>
              <TableCell>{barang.stok}</TableCell>
              <TableCell className="flex gap-1">
                <Button>Edit</Button>
                <Button variant="destructive">Delete</Button>
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

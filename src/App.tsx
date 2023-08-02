import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import './App.css'
import { useSelector } from "react-redux"
import { RootState } from "./redux/store"
import { useDispatch } from "react-redux"
import TabelBarang from "./components/TabelBarang"

function App() {

  const dispatch = useDispatch()

  const listBarang = useSelector(
    (state: RootState) => state.barang.value)

  return (
    <div className='flex flex-col gap-3 mx-auto'>
      <div id='title' className="pb-4">
        <h1 className='text-3xl font-bold'>Barangify</h1>
      </div>

      <section className='flex flex-row justify-between'>
        <div id='add item' className='flex flex-col gap-3'>
          <h2 className='text-2xl'>Tambah Barang</h2>
          {/* form goes here */}
          <Button variant="default">Tambah</Button>
        </div>

        <aside className='flex flex-col gap-3 w-[75%]'>
          <h2 className='text-2xl'>List Barang</h2>
          <TabelBarang />
          {/* {listBarang.map((barang) => {
            return (
              <>
                <h3 key={barang.id} className="text-xl">{barang.namaBarang}</h3>
                <p>Harga Beli: {barang.hargaBeli}</p>
                <p>Harga Jual: {barang.hargaJual}</p>
                <p>Stok: {barang.stok}</p>
              </>

            )
          })} */}



          {/* <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Nama Barang</TableHead>
                <TableHead>Harga Beli</TableHead>
                <TableHead>Harga Jual</TableHead>
                <TableHead>Jumlah Stok</TableHead>
                <TableHead>Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
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
            </TableBody>
          </Table> */}

        </aside>
      </section>
    </div >
  )
}

export default App
import { Button } from "@/components/ui/button"

import './App.css'
import { useSelector } from "react-redux"
import { RootState } from "./redux/store"
import { useDispatch } from "react-redux"
import TabelBarang from "./components/TabelBarang"

function App() {

  const dispatch = useDispatch()

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

        </aside>
      </section>
    </div >
  )
}

export default App
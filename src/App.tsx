
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import ListBarang from "./components/ListBarang"
import FormTambahBarang from "./components/FormTambahBarang"
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className='flex flex-col gap-3 mx-auto'>
      <div id='title' className="pb-4">
        <h1 className='text-3xl font-bold'>Barangify</h1>
      </div>

      <section className='flex flex-row justify-between'>
        {/* <div id='add item' className='flex flex-col gap-3'>
          <h2 className='text-2xl'>Tambah Barang</h2>
          <FormTambahBarang barang={undefined} />
        </div> */}

        <Routes>
          <Route path="/" element={<ListBarang />} />
          <Route path="/add" element={<FormTambahBarang barang={undefined} />} />
        </Routes>
      </section >
    </div >
  )
}

export default App
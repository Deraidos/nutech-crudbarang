
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import ListBarang from "./components/ListBarang"
import FormTambahBarang from "./components/FormTambahBarang"
import FormEditBarang from './components/FormEditBarang';
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className='flex flex-col gap-3 mx-auto'>
      <div id='title' className="pb-4">
        <h1 className='text-3xl font-bold'>Barangify</h1>
      </div>

      <section className='flex flex-row justify-between'>
        <Routes>
          <Route path="/" element={<ListBarang />} />
          <Route path="/add" element={<FormTambahBarang barang={undefined} />} />
          <Route path="/edit/:id" element={<FormEditBarang />} />
        </Routes>
      </section >
    </div >
  )
}

export default App
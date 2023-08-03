
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import TabelBarang from "./components/TabelBarang"
import FormTambahBarang from "./components/FormTambahBarang"

function App() {

  return (
    <div className='flex flex-col gap-3 mx-auto'>
      <div id='title' className="pb-4">
        <h1 className='text-3xl font-bold'>Barangify</h1>
      </div>

      <section className='flex flex-row justify-between'>
        <div id='add item' className='flex flex-col gap-3'>
          <h2 className='text-2xl'>Tambah Barang</h2>
          <FormTambahBarang barang={undefined} />
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
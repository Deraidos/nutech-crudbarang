import supabase from '../../lib/supabase'
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

export const barangApi = createApi({
  reducerPath: 'barangApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getBarang: builder.query({
      queryFn: async () => {
        const data = await supabase.from('barang').select('*')
        return { data }
      },
    }),
  }),
})

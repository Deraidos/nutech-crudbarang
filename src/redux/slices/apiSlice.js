import supabase from '../../lib/supabase'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const barangApi = createApi({
  reducerPath: 'barangApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getBarang: builder.query({
      queryFn: async () => {
        const { data, error } = await supabase.from('barang').select('*')
        return { data, error }
      },
    }),
    deleteBarang: builder.mutation({
      // Use builder.mutation for delete operation
      queryFn: async (id) => {
        const { error } = await supabase.from('barang').delete().eq('id', id)
        return { error }
      },
    }),
  }),
})

export const { useGetBarangQuery, useDeleteBarangMutation } = barangApi

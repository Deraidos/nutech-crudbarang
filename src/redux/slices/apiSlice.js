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
      queryFn: async (id) => {
        const { data, error } = await supabase
          .from('barang')
          .delete()
          .eq('id', id)
        return { data, error }
      },
    }),
  }),
})

export const { useGetBarangQuery, useDeleteBarangMutation } = barangApi

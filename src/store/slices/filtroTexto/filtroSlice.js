import { createSlice } from '@reduxjs/toolkit';

export const filtroSlice = createSlice({
    name: 'filtroTexto',
    initialState: {
      filtroTexto:[],
      filtroNumero:[],
      loading:false,
    },
    reducers: {
      setBusquedaTexto:(state, {payload}) => {
        state.filtroTexto = payload;
      },
      setBusquedaNumero:(state, {payload}) => {
        state.filtroNumero = payload;
      },
      setLoading:(state, {payload}) => {
        state.loading = payload;
      },
    }
});


// Action creators are generated for each case reducer function
export const { setBusquedaTexto, setBusquedaNumero, setLoading } = filtroSlice.actions;

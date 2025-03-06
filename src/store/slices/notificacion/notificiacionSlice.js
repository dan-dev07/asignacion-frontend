import { createSlice } from "@reduxjs/toolkit";

export const notificacionSlice = createSlice({
  name: "notificacion",
  initialState: {
    notificacion:{
      type:"",
      content:"",
      date:""    
    },
  },
  reducers: {
    setNotificacion: (state, {payload}) => {
      state.notificacion = payload;      
    },
  },
});

export const { setNotificacion } = notificacionSlice.actions;

import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        open:false
    },
    reducers: {
        setModal:(state, {payload})=>{
          state.open = payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const { setModal } = modalSlice.actions;

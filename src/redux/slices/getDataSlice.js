import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getData = createAsyncThunk('data', async (url) => {
    try{
        const response = await fetch(url);
        return response.json()
    }catch(error){
        console.log(error);
    }
})

const getDataSlice = createSlice({
    name: 'data',
    initialState:{
        loading:false,
        data:null,
        error: false
    },

    extraReducers: (builder) =>{
        builder
        .addCase(getData.pending, (state) =>{
            state.loading = true;
            
        })
        .addCase(getData.fulfilled, (state, action) =>{
            state.loading = true;
            state.data = action.payload;
            state.error = false;
        })
        .addCase(getData.rejected, (state) =>{
            state.loading = false;
            state.error = true;
        })

    }
})

export default getDataSlice.reducer
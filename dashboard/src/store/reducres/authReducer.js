import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const adminLogin = createAsyncThunk('/auth/admin_login', 
    async(infor, {rejectWithValue, fulfillWithValue}) => {
        console.log('admin login infor',infor)
        try{
            const {data} = await api.post('/admin/login', infor, {withCredentials: true});
            localStorage.setItem('accessToken', data.token);
            return fulfillWithValue(data)
        }catch(error){
            // console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

export const authReducer = createSlice({
    name: 'auth',
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        userInfor: ''
    },

    reducers: {
        messageClear: (state) => {
            state.errorMessage = "";
            state.successMessage = "";
        }
    },
    extraReducers: (builder) => {
        builder.addCase(adminLogin.pending, (state, {payload}) => {
            state.loader = true;
        })
        .addCase(adminLogin.rejected, (state, {payload}) => {
            state.loader = false;
            state.errorMessage = payload.error
        })
        .addCase(adminLogin.fulfilled, (state, {payload}) => {
            state.loader = false;
            state.successMessage = payload.message
        })
    }
})
export const {messageClear} = authReducer.actions;
export default authReducer.reducer;
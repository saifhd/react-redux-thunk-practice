import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export default createAsyncThunk(
    'auth/register',
    async({name, email, password, password_confirmation}, {rejectWithValue}) => {
        
        try {
            const config = {
                Headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            };

            const response = await axios.post('http://localhost:8000/api/v1/register', {
                name, email, password, password_confirmation
            }, config);
            return response.data.data
        }
        catch(error) {
            if (error.response.status == 422) {
                return rejectWithValue(error.response.data.errors)
            }
            alert(error.response.data.message)
        }
    }
)
// src/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../config";

// Async thunk for login
export const allowLogin = createAsyncThunk(
    "auth/loginUser",
    async (loginData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${API_URL}/auth/login`, loginData);
            const token = response.data.token;
            sessionStorage.setItem("authToken", token);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Login failed. Please try again."
            );
        }
    }
);

const authSlice = createSlice({
    name: "user",
    initialState: {
      user: null,
      loading: false,
      token: null,
      error: null,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            sessionStorage.removeItem("authToken"); // Clear token from sessionStorage
          },          
    },
    extraReducers: (builder) => {
      builder
        .addCase(allowLogin.pending, (state) => {
          state.loading = true; // Set loading to true when the login starts
          state.error = null; // Clear any previous errors
        })
        .addCase(allowLogin.fulfilled, (state, action) => {
          state.loading = false; // Set loading to false when login is successful
          state.user = action.payload; // Store user data
          state.error = null; // Clear any errors
        })
        .addCase(allowLogin.rejected, (state, action) => {
          state.loading = false; // Set loading to false if login fails
          state.error = action.payload; // Store error message
        });
    },
  });
  

export const { logout } = authSlice.actions;
export default authSlice.reducer;

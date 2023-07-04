//https://www.cluemediator.com/redux-toolkit-with-async-api-call-using-createasyncthunk
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getUserList = createAsyncThunk('user/getUserList', async (page,
   { rejectWithValue }) => {
    try {
      const data = await fetch(`https://reqres.in/api/users?per_page=2&page=${page}`).
      then(y=>y.json());
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  })






const initialState = {

    data: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [getUserList.pending]: (state) => {
      state.isLoading = true;
    },
    [getUserList.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = payload;
    },
    [getUserList.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload
    }
  }
});



export default userSlice.reducer
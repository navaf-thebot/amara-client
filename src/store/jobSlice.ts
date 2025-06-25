import { createSlice } from '@reduxjs/toolkit';
import { applyJobThunk } from './authThunks'; // Or wherever you placed the thunk
import { JobState } from '@/lib/type';


const initialState: JobState = {
  loading: false,
  error: null,
  success: false,
};

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    clearJobState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(applyJobThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(applyJobThunk.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(applyJobThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearJobState } = jobSlice.actions;
export default jobSlice.reducer;
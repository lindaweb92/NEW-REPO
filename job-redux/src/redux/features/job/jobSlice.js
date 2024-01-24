import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import jobAPI from "./JobAPI";

export const fetchJob = createAsyncThunk("job/fetchJob", async (jobId) => {
  const job = await jobAPI.fetchJob(jobId);

  return job;
});

const initialState = {
  isLoading: false,
  job: {},
  isSuccess: false,
  isError: false,
  error: "",
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchJob.pending, (state) => {
        state.isLoading = true;
        state.job = {};
        state.isSuccess = false;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.job = action.payload;
        state.isSuccess = true;
      })
      .addCase(fetchJob.rejected, (state, action) => {
        state.isLoading = false;
        state.job = {};
        state.isSuccess = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default jobSlice.reducer;
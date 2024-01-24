import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import jobsAPI from "./jobsAPI";

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const jobs = await jobsAPI.fetchJobs();

  return jobs;
});

export const addJob = createAsyncThunk("jobs/addJob", async (job) => {
  const newJob = await jobsAPI.addJob(job);

  return newJob;
});

export const updateJob = createAsyncThunk(
  "jobs/updateJob",
  async ({ id, job }) => {
    const updatedJob = await jobsAPI.updateJob(id, job);

    return updatedJob;
  }
);

export const deleteJob = createAsyncThunk("jobs/deleteJob", async (id) => {
  const deletedJobId = await jobsAPI.deleteJob(id);

  return deletedJobId;
});

const initialState = {
  isLoading: false,
  jobs: [],
  isError: false,
  error: "",
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  extraReducers: (builder) => {
    //--------------- fetch jobs ---------------//
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isLoading = true;
        state.jobs = [];
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.jobs = [];
        state.isError = true;
        state.error = action.error.message;
      });
    //--------------- create job ---------------//
    builder
      .addCase(addJob.pending, (state) => {
        state.isError = false;
        state.error = "";
      })
      .addCase(addJob.fulfilled, (state, action) => {
        state.jobs.push(action.payload);
      })
      .addCase(addJob.rejected, (state, action) => {
        state.isError = true;
        state.error = action.error.message;
      });
    //--------------- update job ---------------//
    builder
      .addCase(updateJob.pending, (state) => {
        state.isError = false;
        state.error = "";
      })
      .addCase(updateJob.fulfilled, (state, action) => {
        state.jobs = state.jobs.map((job) =>
          job.id === action.payload.id ? action.payload : job
        );
      })
      .addCase(updateJob.rejected, (state, action) => {
        state.isError = true;
        state.error = action.error.message;
      });
    //--------------- delete job ---------------//
    builder
      .addCase(deleteJob.pending, (state) => {
        state.isError = false;
        state.error = "";
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.jobs = state.jobs.filter((job) => job.id !== action.payload);
      })
      .addCase(deleteJob.rejected, (state, action) => {
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default jobsSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";

import jobReducer from "../features/job/jobSlice";
import jobsReducer from "../features/jobs/jobsSlice";
import filterReducer from "../features/filters/filterSlice";

const store = configureStore({
  reducer: {
    job: jobReducer,
    jobs: jobsReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  },
});

export default store;
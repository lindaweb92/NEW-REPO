import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// redux actions.
import { fetchJobs } from "../redux/features/jobs/jobsSlice";

const useJobs = () => {
  const dispatch = useDispatch();
  const { jobs, ...rest } = useSelector((state) => state.jobs);

  useEffect(() => {
    if (!jobs.length) dispatch(fetchJobs());
  }, []);

  return { jobs, ...rest };
};

export default useJobs;
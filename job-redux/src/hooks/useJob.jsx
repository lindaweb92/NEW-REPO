import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// redux actions.
import { fetchJob } from "../redux/features/job/jobSlice";

const useJob = () => {
  const { jobId } = useParams();
  const dispatch = useDispatch();
  const job = useSelector((state) => state.job);

  useEffect(() => {
    dispatch(fetchJob(jobId));
  }, [jobId]);

  return job;
};

export default useJob;
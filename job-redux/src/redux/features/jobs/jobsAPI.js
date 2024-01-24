import axios from "../../../utils/axios";

const fetchJobs = async () => {
  const { status, data: jobs } = await axios.get("/jobs");

  if (status === 200) {
    return jobs;
  }
};

const addJob = async (job) => {
  const { status, data: newJob } = await axios.post("/jobs", job);

  if (status === 201) {
    return newJob;
  }
};

const updateJob = async (id, job) => {
  const { status, data: updatedJob } = await axios.patch(`/jobs/${id}`, job);
  if (status === 200) {
    return updatedJob;
  }
};

const deleteJob = async (id) => {
  const { status } = await axios.delete(`/jobs/${id}`);
  if (status === 200) {
    return id;
  }
};

export default { fetchJobs, addJob, updateJob, deleteJob };
import axios from "../../../utils/axios";

const fetchJob = async (id) => {
  const { status, data: job } = await axios.get(`/jobs/${id}`);

  if (status === 200) {
    return job;
  }
};

export default { fetchJob };
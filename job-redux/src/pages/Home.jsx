import { useParams } from "react-router-dom";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// redux actions.
import {
  changeSearchText,
  changeSortParam,
} from "../redux/features/filters/filterSlice"; 

// custom hooks.
import useJobs from "../../src/hooks/useJobs";

// react components.
import Job from "../components/jobs/Job"; 
import Message from "../components/ui/Message";
import JobListHeader from "../components/jobs/JobListHeader";
import JobsSkeleton from "../components/skeletons/jobs/JobsSkeleton";

const jobTypes = {
  "Full Time": "fulltime",
  Internship: "internship",
  Remote: "remote",
};

const Home = () => {
  const dispatch = useDispatch();

  const { type } = useParams();
  const { jobs, isLoading, isError, error } = useJobs();
  const { sortParam, searchText } = useSelector((state) => state.filter);

  const filterByTypes = (job) => {
    return type === "all" ? true : jobTypes[job.type] === type;
  };

  const filterBySearch = (job) => {
    return job.title.toLowerCase().includes(searchText.toLowerCase());
  };

  const sortBySalary = (a, b) => {
    switch (sortParam) {
      case "low_to_high":
        return Number(a.salary) - Number(b.salary);
      case "high_to_low":
        return Number(b.salary) - Number(a.salary);
      default:
        return 0;
    }
  };

  const filteredJobs = jobs
    .filter(filterByTypes)
    .filter(filterBySearch)
    .sort(sortBySalary);

  useEffect(() => {
    if (searchText) dispatch(changeSearchText(""));
    if (sortParam !== "default") dispatch(changeSortParam("default"));
  }, []);

  return (
    <div className="lg:pl-[14rem]  mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        {isLoading && <JobsSkeleton />}

        {isError && <Message>{error} ☹</Message>}

        {!isLoading && !isError && (
          <Fragment>
            <JobListHeader />

            {!filteredJobs.length && <Message>No Job Found 👻</Message>}

            <div className="jobs-list">
              {filteredJobs.map((job) => (
                <Job key={job.id} job={job} />
              ))}
            </div>
          </Fragment>
        )}
      </main>
    </div>
  );
};

export default Home;
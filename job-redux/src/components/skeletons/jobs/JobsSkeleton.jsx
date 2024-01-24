import { Fragment } from "react";

// react components.
import JobSkeleton from "./JobSkeleton";
import JobListHeaderSkeleton from "./JobListHeaderSkeleton";

const JobsSkeleton = () => {
  const jobs = [1, 2, 3, 4, 5];

  return (
    <Fragment>
      <JobListHeaderSkeleton />
      <div className="jobs-list">
        {jobs.map((job) => (
          <JobSkeleton key={job} />
        ))}
      </div>
    </Fragment>
  );
};

export default JobsSkeleton;
import "./style.css";

const JobSkeleton = () => {
  return (
    <div className="lws-single-job">
      <div className="flex-1 min-w-0">
        <h2 className="lws-title sk-title">Full Stack Developer</h2>
        <div className="job-footers">
          <div className="lws-type sk-type">Full-time</div>
          <div className="lws-salary sk-salary">BDT 30,000</div>
          <div className="lws-deadline sk-deadline">Closing on 2024-12-31</div>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="hidden sm:block">
          <button
            disabled
            type="button"
            className="lws-edit btn btn-primary sk-button"
          >
            <i className="fa-solid fa-pen  -ml-1 mr-2" />
            Edit
          </button>
        </span>
        <span className="sm:ml-3">
          <button
            disabled
            type="button"
            className="lws-delete btn btn-danger sk-button"
          >
            <i className="fa-solid fa-trash  -ml-1 mr-2" />
            Delete
          </button>
        </span>
      </div>
    </div>
  );
};

export default JobSkeleton;
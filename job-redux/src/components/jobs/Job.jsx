import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// redux actions.
import { deleteJob } from "../../redux/features/jobs/jobsSlice";

// mapping job-type to color.
const colors = {
  "Full Time": "#FF8A00",
  Internship: "#FF5757",
  Remote: "#56E5C4",
};

const Job = ({ job }) => {
  const { id, title, type, salary, deadline } = job || {};

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const editHandler = () => {
    navigate(`/jobs/edit/${id}`);
  };

  const deleteHandler = () => {
    dispatch(deleteJob(id));
  };

  return (
    <div className="lws-single-job">
      <div className="flex-1 min-w-0">
        <h2 className="lws-title">{title}</h2>
        <div className="job-footers">
          <div className="lws-type">
            <i
              className={`fa-solid fa-stop !text-[${colors[type]}] text-lg mr-1.5`}
            />
            {type}
          </div>
          <div className="lws-salary">
            <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5" />
            BDT {Number(salary).toLocaleString()}
          </div>
          <div className="lws-deadline">
            <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5" />
            Closing on {deadline}
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="hidden sm:block">
          <button
            type="button"
            className="lws-edit btn btn-primary"
            onClick={editHandler}
          >
            <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2" />
            Edit
          </button>
        </span>
        <span className="sm:ml-3">
          <button
            type="button"
            className="lws-delete btn btn-danger"
            onClick={deleteHandler}
          >
            <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2" />
            Delete
          </button>
        </span>
      </div>
    </div>
  );
};

export default Job;
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// redux actions.
import { addJob } from "../redux/features/jobs/jobsSlice";

// initial form values.
const formValues = {
  title: "",
  type: "",
  salary: "",
  deadline: "",
};

const AddJob = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState(formValues);

  // change values of the form.
  const changeHandler = (event) => {
    const { name, value } = event.target;

    const updatedValues = { ...values, [name]: value };

    setValues(updatedValues);
  };

  // add a new job.
  const formSubmitHandler = (event) => {
    event.preventDefault();

    dispatch(addJob(values));
    navigate("/jobs/all");
  };

  return (
    <div className="lg:pl-[14rem]  mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <h1 className="mb-10 text-center lws-section-title">Add Job</h1>
        <div className="max-w-3xl mx-auto">
          <form className="space-y-6" onSubmit={formSubmitHandler}>
            <div className="fieldContainer">
              <label
                htmlFor="lws-JobTitle"
                className="text-sm font-medium text-slate-300"
              >
                Job Title
              </label>
              <select
                required
                name="title"
                id="lws-JobTitle"
                value={values.title}
                onChange={changeHandler}
              >
                <option value="" hidden>
                  Select Job
                </option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Software Developer">Software Developer</option>
                <option value="Full Stack Developer">
                  Full Stack Developer
                </option>
                <option value="MERN Stack Developer">
                  MERN Stack Developer
                </option>
                <option value="DevOps Engineer">DevOps Engineer</option>
                <option value="QA Engineer">QA Engineer</option>
                <option value="Product Manager">Product Manager</option>
                <option value="Social Media Manager">
                  Social Media Manager
                </option>
                <option value="Senior Executive">Senior Executive</option>
                <option value="Junior Executive">Junior Executive</option>
                <option value="Android App Developer">
                  Android App Developer
                </option>
                <option value="IOS App Developer">IOS App Developer</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Frontend Engineer">Frontend Engineer</option>
              </select>
            </div>
            <div className="fieldContainer">
              <label htmlFor="lws-JobType">Job Type</label>
              <select
                required
                name="type"
                id="lws-JobType"
                value={values.type}
                onChange={changeHandler}
              >
                <option value="" hidden>
                  Select Job Type
                </option>
                <option value="Full Time">Full Time</option>
                <option value="Internship">Internship</option>
                <option value="Remote">Remote</option>
              </select>
            </div>
            <div className="fieldContainer">
              <label htmlFor="lws-JobSalary">Salary</label>
              <div className="flex border rounded-md shadow-sm border-slate-600">
                <span className="input-tag">BDT</span>
                <input
                  required
                  type="number"
                  name="salary"
                  id="lws-JobSalary"
                  value={values.salary}
                  className="!rounded-l-none !border-0"
                  placeholder="20,00,000"
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="fieldContainer">
              <label htmlFor="lws-JobDeadline">Deadline</label>
              <input
                required
                type="date"
                name="deadline"
                id="lws-JobDeadline"
                value={values.deadline}
                onChange={changeHandler}
              />
            </div>
            <div className="text-right">
              <button
                type="submit"
                id="lws-submit"
                className="cursor-pointer btn btn-primary w-fit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddJob;
import { Fragment } from "react";

import "./style.css";

const FormSkeleton = () => {
  return (
    <Fragment>
      <h1 className="mb-10 text-center lws-section-title sk-form-heading">
        Edit Job
      </h1>
      <div className="max-w-3xl mx-auto">
        <form className="space-y-6">
          <div className="fieldContainer">
            <label
              htmlFor="lws-JobTitle"
              className="text-sm font-medium text-slate-300 sk-label"
            >
              Job Title
            </label>
            <select disabled id="lws-JobTitle" className="sk-input"></select>
          </div>
          <div className="fieldContainer">
            <label htmlFor="lws-JobType" className="sk-label">
              Job Type
            </label>
            <select disabled id="lws-JobType" className="sk-input"></select>
          </div>
          <div className="fieldContainer">
            <label htmlFor="lws-JobType" className="sk-label">
              Job Type
            </label>
            <select disabled id="lws-JobSalary" className="sk-input"></select>
          </div>
          <div className="fieldContainer">
            <label htmlFor="lws-JobDeadline" className="sk-label">
              Deadline
            </label>
            <input disabled id="lws-JobDeadline" className="sk-input" />
          </div>
          <div className="text-right">
            <button
              disabled
              id="lws-submit"
              className="cursor-pointer btn btn-primary w-fit sk-submit"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default FormSkeleton;

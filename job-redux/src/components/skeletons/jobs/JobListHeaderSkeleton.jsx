const JobListHeaderSkeleton = () => {
    return (
      <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
        <h1 className="lws-section-title sk-joblist-heading">
          All Available Jobs
        </h1>
        <div className="flex gap-4">
          <div className="group flex-1">
            <input
              disabled
              id="lws-searchJob"
              className="search-input sk-input"
            />
          </div>
          <select disabled id="lws-sort" className="flex-1 sk-input">
            <option value="" hidden></option>
            <option value="low_to_high">Salary (Low to High)</option>
          </select>
        </div>
      </div>
    );
  };
  
  export default JobListHeaderSkeleton;
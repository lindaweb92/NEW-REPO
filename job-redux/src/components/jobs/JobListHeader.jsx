import { useDispatch, useSelector } from "react-redux";

import {
  changeSearchText,
  changeSortParam,
} from "../../redux/features/filters/filterSlice";

const JobListHeader = () => {
  const dispatch = useDispatch();
  const { searchText, sortParam } = useSelector((state) => state.filter);

  const searchTextChangeHandler = (event) => {
    const text = event.target.value;
    dispatch(changeSearchText(text));
  };

  const sortParamChangeHandler = (event) => {
    const param = event.target.value;
    dispatch(changeSortParam(param));
  };

  return (
    <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
      <h1 className="lws-section-title">All Available Jobs</h1>
      <div className="flex gap-4">
        <div className="search-field group flex-1">
          <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500" />
          <input
            type="text"
            id="lws-searchJob"
            value={searchText}
            placeholder="Search Job"
            className="search-input"
            onChange={searchTextChangeHandler}
          />
        </div>
        <select
          name="sort"
          id="lws-sort"
          value={sortParam}
          className="flex-1"
          onChange={sortParamChangeHandler}
        >
          <option value="default">Default</option>
          <option value="low_to_high">Salary (Low to High)</option>
          <option value="high_to_low">Salary (High to Low)</option>
        </select>
      </div>
    </div>
  );
};

export default JobListHeader;
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="sidebar">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link
              to="/jobs/all"
              className={`main-menu ${
                pathname === "/jobs/all" && "menu-active"
              }`}
              id="lws-alljobs-menu"
            >
              <i className="fa-solid fa-briefcase" />
              <span> All Available Jobs</span>
            </Link>
            <ul className="space-y-6 lg:space-y-2 ">
              <li>
                <Link
                  className="sub-menu "
                  to="/jobs/internship"
                  id="lws-internship-menu"
                >
                  <i className="fa-solid fa-stop !text-[#FF5757]" /> Internship
                </Link>
              </li>
              <li>
                <Link
                  className="sub-menu"
                  to="/jobs/fulltime"
                  id="lws-fulltime-menu"
                >
                  <i className="fa-solid fa-stop !text-[#FF8A00]" /> Full Time
                </Link>
              </li>
              <li>
                <Link
                  className="sub-menu"
                  to="/jobs/remote"
                  id="lws-remote-menu"
                >
                  <i className="fa-solid fa-stop !text-[#56E5C4]" /> Remote
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              to="/jobs/add"
              className={`main-menu ${
                pathname === "/jobs/add" && "menu-active"
              }`}
              id="lws-addJob-menu"
            >
              <i className="fa-solid fa-file-circle-plus" />
              <span> Add New Job</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
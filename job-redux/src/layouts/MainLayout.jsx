import { Fragment } from "react";

// react components.
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
        <Sidebar />
        {children}
      </div>
    </Fragment>
  );
};

export default MainLayout;
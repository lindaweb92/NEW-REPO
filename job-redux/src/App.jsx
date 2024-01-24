import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

// react components.
import MainLayout from "./layouts/MainLayout";

// pages.
import Add from "./pages/Add";
import Home from "./pages/Home";
import Edit from "./pages/Edit";

// redux store.
import store from "./redux/app/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="" element={<Navigate to="jobs/all" />} />
            <Route path="jobs" element={<Navigate to="all" />} />
            <Route path="jobs/add" element={<Add />} />
            <Route path="jobs/edit/:jobId" element={<Edit />} />
            <Route path="jobs/:type" element={<Home />} />
          </Routes>
        </MainLayout>
      </Router>
    </Provider>
  );
};

export default App;
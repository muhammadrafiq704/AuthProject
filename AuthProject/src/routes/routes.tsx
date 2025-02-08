import { Route } from "react-router-dom";
import RouteData from "../utils/routePaths";
import App from "../App";
import ErrorBoundary from "../components/ErrorBoundary";
import Login from "../pages/Login/Login";
import AppLayout from "../layout";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import PageLayout from "../layout/PageLayout/PageLayout";
import Dashboard from "../pages/Dashboard";
import NotFound from "../components/NotFound";

// Loader function
const forgotPasswordLoader = async () => {
  await new Promise((res) => setTimeout(res, 2000));
  return null;
};

const appRoutes = (
  <Route
    path={RouteData.APP}
    element={<App />}
    errorElement={<ErrorBoundary />}
    loader={forgotPasswordLoader}
  >
    <Route element={<AppLayout />}>
      <Route
        path={RouteData.SIGNIN}
        element={<Login />}
        loader={forgotPasswordLoader}
      />
      <Route
        path={RouteData.FORGOTPASSWORD}
        element={<ForgotPassword />}
        loader={forgotPasswordLoader}
      />
      <Route
        path={RouteData.RESETPASSWORD}
        element={<ResetPassword />}
        loader={forgotPasswordLoader}
      />
    </Route>
    <Route element={<PageLayout />}>
      <Route
        path={RouteData.DASHBOARD}
        element={<Dashboard />}
        loader={forgotPasswordLoader}
      />
    </Route>
    not found page render 
    <Route path="*" element={<NotFound/>}></Route>
  </Route>
);

export default appRoutes;

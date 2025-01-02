import { Route } from "react-router-dom";
import RouteData from "./RouteData";
import App from "../App";
import ErrorBoundary from "../components/ErrorBoundary";
import Login from "../pages/Login/Login";
import AppLayout from "../layout";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";

const appRoutes = (
  <Route
    path={RouteData.APP}
    element={<App />}
    errorElement={<ErrorBoundary />}
  >
    <Route element={<AppLayout />}>
      <Route path={RouteData.SIGNIN} element={<Login />} />
      <Route path={RouteData.FORGOTPASSWORD} element={<ForgotPassword />} />
      <Route path={RouteData.RESETPASSWORD} element={<ResetPassword />} />
    </Route>
  </Route>
);

export default appRoutes;

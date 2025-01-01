import { Route } from "react-router-dom";
import RouteData from "./RouteData";
import App from "../App";
import ErrorBoundary from "../components/ErrorBoundary";
import SignIn from "../pages/Login/Login";
import AppLayout from "../layout";
import SignUp from "../pages/Logout/Logout";
import ResetPassword from "../pages/ResetPassword/ResetPassword";

const appRoutes = (
  <Route
    path={RouteData.APP}
    element={<App />}
    errorElement={<ErrorBoundary />}
  >
    <Route element={<AppLayout />}>
      <Route path={RouteData.SIGNIN} element={<SignIn />} />
      <Route path={RouteData.SIGNUP} element={<SignUp />} />
      <Route path={RouteData.RESETPASSWORD} element={<ResetPassword />} />
    </Route>
  </Route>
);

export default appRoutes;

import { Route } from "react-router-dom";
import RouteData from "../utils/routePaths";
import App from "../App";
import ErrorBoundary from "../components/ErrorBoundary";
import Login from "../pages/Login/Login";
import AppLayout from "../layout";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import Test from "../pages/Test/test";

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
      <Route path={RouteData.SIGNIN} element={<Login />} loader={forgotPasswordLoader} />
      <Route
        path={RouteData.FORGOTPASSWORD}
        element={<ForgotPassword />}
        loader={forgotPasswordLoader}
      />
      <Route path={RouteData.RESETPASSWORD} element={<ResetPassword />} loader={forgotPasswordLoader} />
      <Route path={RouteData.TEST} element={<Test />} />
    </Route>
  </Route>
);

export default appRoutes;

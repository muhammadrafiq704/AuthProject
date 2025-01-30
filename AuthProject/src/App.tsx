import { Outlet, useNavigation } from "react-router-dom";
import React from "react";
import Loading from "./components/Loading/Loading";

const App: React.FC = () => {
  //global pending navigation loading state
  const navigation = useNavigation();

  return <>{navigation.state === "loading" ? <Loading /> : <Outlet />}</>;
};

export default App;

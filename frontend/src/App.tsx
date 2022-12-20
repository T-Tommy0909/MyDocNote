import { FC } from "react";
import { Router, Outlet } from "@tanstack/react-location";

import { routes, location } from "./Router";

export const App: FC = () => {
  return <Router routes={routes} location={location}></Router>;
};

export default App;

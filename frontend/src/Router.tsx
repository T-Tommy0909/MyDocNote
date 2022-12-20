import { Route, ReactLocation } from "@tanstack/react-location";

import { Root } from "./pages/root";

export const location = new ReactLocation();

export const routes: Route[] = [
  {
    path: "/",
    element: <Root />,
  },
];

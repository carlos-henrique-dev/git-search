import { Switch, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import Home from "../pages/Home";
import PublicRoute from "./PublicRoute";

const PublicRoutes = [
  {
    key: "login",
    path: "/",
    component: Home,
    exact: true,
  },
];

const history = createBrowserHistory();

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <PublicRoute>
          <Route exact path={["/"]}>
            {PublicRoutes.map((publicRouteProps) => (
              <Route {...publicRouteProps} />
            ))}
          </Route>
        </PublicRoute>
      </Switch>
    </Router>
  );
}

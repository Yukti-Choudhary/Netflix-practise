import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, SignIn, SignUp } from "./pages/index";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";

function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Routes>
        <Route
          element={<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} />}
        >
          <Route exact path={ROUTES.SIGN_UP} element={<SignUp />} />
          <Route exact path={ROUTES.SIGN_IN} element={<SignIn />} />
          <Route exact path={ROUTES.HOME} element={<Home />} />
        </Route>

        <Route element={<ProtectedRoute user={user} />}>
          <Route exact path={ROUTES.BROWSE} element={<Browse />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import { Route } from "react-router-dom";

const ProtectedRoutes = ({ auth, component: Component, ...rest }) => {
  return (
    <div>
      <Route
        {...rest}
        render={(props) => {
          if (auth) return <Component {...props} />;
          if (!auth)
            return (
              <Redirect to={{ path: "/", state: { from: props.location } }} />
            );
        }}
      />
    </div>
  );
};

export default ProtectedRoutes;

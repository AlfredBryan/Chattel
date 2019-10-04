import React from "react";
import Home from "./components/Home/Home";
import { Switch, Route } from "react-router-dom";
import Register from "./components/User/Register";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;

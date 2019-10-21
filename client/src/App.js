import React from "react";
import Home from "./components/Home/Home";
import { Switch, Route } from "react-router-dom";
import Register from "./components/User/Register";
import Features from "./components/Features/Features";
import Testimonials from "./components/Testimonials/Testimonials";
import Properties from "./components/Property/Properties";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/features" component={Features} />
        <Route exact path="/testimonials" component={Testimonials} />
        <Route exact path="/properties" component={Properties} />
      </Switch>
    </div>
  );
}

export default App;

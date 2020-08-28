import React from "react";
/* Rounter */
import { Switch, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";


class App extends React.Component {
  render() {
    return (
      <div className="main-wrap">
        <Switch>
          {/*
            Not secure
          */}
          <Route exact path="/" component={Dashboard} />
          {/* 
            Secure data 
          */}
        </Switch>
      </div>
    );
  }
}
export default App;

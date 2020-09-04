import React from "react";
/* Rounter */
import { Switch, Route } from "react-router-dom";

/* Pages */
import Login from './pages/login/Login';
import Dashboard from "./pages/dashboard/Dashboard";

/* Plugins */
import { getToken } from './components/helper';


class App extends React.Component {

  state = {
    token: false
  }
  componentDidMount() {
    this.checkToken();
  }
  checkToken = () => {
    let token = getToken();
    token && this.setState({token:token});
  }
  render() {
    const { token } = this.state;
    if (!token) {
      return <Login />
    }
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

import logo from "./logo.svg";
import "./App.css";
import { Redirect, Route, Switch } from "react-router";
import Signin from "./components/Authentication/Signin";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Signin />
        </Route>

        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;

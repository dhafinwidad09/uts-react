import "./styles.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./component/dashboard/dashboard";
import Surat from "./component/daftarsurat/surat";
import Ayat from "./component/daftarayat/ayat";

function App() {
  return {
    <div>
      <Switch>
          <Dashboard>
          <Route path="/" exact component/>
          </Dashboard>
          <Route path = "/" exact component={Dashboard}/>
      </Switch>
    </div>
  };
}

export default App;

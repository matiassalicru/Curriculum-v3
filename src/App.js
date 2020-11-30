import React from "react";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills"component={Skills} />

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

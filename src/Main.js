import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";

import Profile from "./Screen/Profile";




class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="content">
            <Route exact path="/" component={Profile} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
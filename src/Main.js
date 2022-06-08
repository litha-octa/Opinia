import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";

import Profile from "./Screen/Profile";
import Poin from "./Screen/Component/Poin";
import Body from './Screen/Body';




class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="content">
            <Route exact path="/" component={Body} />
            <Route path ='/poin' component={Poin}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
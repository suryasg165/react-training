import React, { Component } from "react";
import "./App.css";
import Users from "./users/users";
import Albums from "./albums/albums";
import LeftNavigation from "./nav";
import Gallery from "./gallery/gallery";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super();
    this.state = { active: "Users" };
  }

  notify = active => {
    this.setState({ active });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <header className="header">
            <span className="title">React component interaction</span>
          </header>
          <div className="container">
            <div className="leftNavigation">
              <LeftNavigation notify={this.notify} active={this.state.active} />
            </div>
            <div className="content">
              <Switch>
                <Route exact path="/Users" component={Users} />
                <Route path="/Albums" component={Albums} />
                <Route path="/Gallery" component={Gallery} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

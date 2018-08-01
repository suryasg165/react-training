import React, { Component } from 'react';
import './App.css';
import Users from './users/users';
import Albums from './albums/albums';
import LeftNavigation from './nav';
import Gallery from './gallery/gallery';

class App extends Component {
  constructor(props) {
    super();
    this.state = { active: 'Users' };
  }

  notify = active => {
    this.setState({ active });
  };

  render() {
    return (
      <div className="app">
        <header className="header">
          <span className="title">React component interaction</span>
        </header>
        <div className="container">
          <div className="leftNavigation">
            <LeftNavigation notify={this.notify} active={this.state.active} />
          </div>
          <div className="content">
            {this.state.active === 'Users' && <Users />}
            {this.state.active === 'Albums' && <Albums />}
            {this.state.active === 'Gallery' && <Gallery />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

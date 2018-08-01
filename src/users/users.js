import React, { Component } from 'react';
import User from './user';
import axios from 'axios';

export default class Users extends Component {
  constructor(props) {
    super();
    this.state = { users: [] };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const users = res.data;
      this.setState({ users });
    });
  }

  render() {
    return (
      <ul style={{ listStyleType: 'none', margin: '0', padding: '0' }}>
        {this.state.users.map((user, index) => {
          user.showMoreDetail = false;
          return (
            <li key={index} style={{ padding: '10px' }} className="user">
              <User {...user} />
              {user.showMoreDetail ? <p>More Details </p> : null}
            </li>
          );
        })}
      </ul>
    );
  }
}

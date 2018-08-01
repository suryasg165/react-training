import React, { Component } from 'react';
import styled from 'styled-components';

const StyledUl = styled.div`
  list-style-type: none;
  padding: 0;
  width: 100%;

  li {
    padding: 10px;
  }

  li.active {
    color: #ffffff;
    background-color: red;
  }

  li:hover {
    background-color: tomato;
    cursor: pointer;
  }
`;

export default class LeftNavigation extends Component {
  notify = item => {
    this.props.notify(item);
  };

  render() {
    return (
      <StyledUl>
        <li
          className={this.props.active === 'Users' ? 'active' : ''}
          onClick={() => this.notify('Users')}
        >
          Users
        </li>
        <li
          className={this.props.active === 'Albums' ? 'active' : ''}
          onClick={() => this.notify('Albums')}
        >
          Albums
        </li>
        <li
          className={this.props.active === 'Gallery' ? 'active' : ''}
          onClick={() => this.notify('Gallery')}
        >
          Gallery
        </li>
      </StyledUl>
    );
  }
}

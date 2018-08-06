import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledUl = styled.div`
  list-style-type: none;
  padding: 0;
  width: 100%;

  li,
  li a {
    padding: 10px;
    width: 100%;
  }

  a.active {
    color: #ffffff;
    background-color: red;
  }

  a:hover {
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
        <li>
          <NavLink to="/Users" activeClassName="active">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/Albums" activeClassName="active">
            Albums
          </NavLink>
        </li>
        <li>
          <NavLink to="/Gallery" activeClassName="active">
            Gallery
          </NavLink>
        </li>
      </StyledUl>
    );
  }
}

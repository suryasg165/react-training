import React, { Component } from 'react';

export default class User extends Component {
  constructor(props) {
    super();
    this.state = { moreDetail: false };
  }

  render() {
    return (
      <section
        onClick={() =>
          this.setState(prevState => {
            return { moreDetail: !prevState.moreDetail };
          })
        }
      >
        <div>
          <img width="100px" src={require('../assets/img/user.png')} />
          <div style={{ display: 'inline-block', padding: '10px' }}>
            <p>Name: {this.props.name} </p>
            Email: <a href={`mailTo:${this.props.email}`}>{this.props.email}</a>
            <p>Company: {this.props.company.name} </p>
          </div>
        </div>
        {this.state.moreDetail && (
          <address style={{ borderTop: '1px solid #ffffff' }}>
            <p>{this.props.address.street}</p>
            <p>{this.props.address.suite}</p>
            <p>
              {this.props.address.city} - {this.props.address.zipcode}
            </p>
          </address>
        )}
      </section>
    );
  }
}

import React, { Component } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const Figure = posed.div({
  idle: { scale: 1, opacity: 0.5 },
  hovered: { scale: 1.05, opacity: 1 }
});

const StyledBox = styled.div`
  width: 400px;
  height: 450px;
  background-color: #fcfcfc;
  box-shadow: 5px 5px 5px #dfdfdf;

  .figure {
    position: relative;
    z-index: 1;
  }

  .figure img {
    padding-left: 20px;
    width: 200px;
    height: 300px;
    cursor: pointer;
  }

  .photo-content {
    padding: 20px;
  }

  .photo-footer {
    border-top: 1px solid #f4f7f6;
    padding: 11px 20px 10px 20px;
    color: red;
  }
`;

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = { hovering: false, clicked: false };
  }

  render() {
    return (
      <StyledBox>
        <div className="figure">
          <Figure
            pose={this.state.hovering ? 'hovered' : 'idle'}
            onMouseEnter={() => this.setState({ hovering: true })}
            onMouseLeave={() => this.setState({ hovering: false })}
          >
            <img
              src={`https://picsum.photos/200/300?image=${this.props.id}`}
              alt={this.props.title}
              width="200px"
              height="300px"
            />
          </Figure>
        </div>
        <div className="photo-content">{this.props.author}</div>
        <div className="photo-footer">{this.props.author_url}</div>
      </StyledBox>
    );
  }
}

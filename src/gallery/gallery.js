import React, { Component } from "react";
import axios from "axios";
import { CircleLoader } from "react-spinners";

import Card from "./card";

class Gallery extends Component {
  state = { photos: [], loading: true };
  photos = [];

  componentDidMount() {
    axios.get(`https://picsum.photos/list`).then(res => {
      this.photos = res.data;
      this.setState({ photos: this.photos, loading: false });
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.loading && (
          <div style={{ padding: "100px", width: "100%", height: "200px" }}>
            <CircleLoader
              size={100}
              color={"red"}
              loading={this.state.loading}
            />
          </div>
        )}
        <div
          style={{
            display: "flex",
            flex: 1,
            padding: "10px",
            flexWrap: "wrap"
          }}
        >
          {this.state.photos.map((photo, i) => <Card key={i} {...photo} />)}
        </div>
      </React.Fragment>
    );
  }
}

export default Gallery;

import React, { Component } from 'react';
import axios from 'axios';

class Albums extends Component {
  state = { albums: [] };
  albums = [];

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/albums`).then(res => {
      this.albums = res.data;
      this.setState({ albums: this.albums });
    });
  }

  filterAlbums(searchQuery) {
    if (!searchQuery) {
      this.searchBox.value = '';
      this.setState({ albums: this.albums });
      return;
    }

    const albums = this.state.albums.filter(al => {
      return al.title.indexOf(searchQuery) > 0;
    });

    this.setState({ albums });
  }

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <input
          ref={node => (this.searchBox = node)}
          type="text"
          style={{ width: '300px', padding: '10px' }}
          onChange={event => this.filterAlbums(event.target.value)}
        />
        <button
          type="button"
          style={{ padding: '10px' }}
          onClick={event => this.filterAlbums()}
        >
          Clear
        </button>
        <ul style={{ listStyleType: 'none', margin: '0', padding: '5px' }}>
          {this.state.albums.map((album, index) => {
            return (
              <li key={index} style={{ padding: '10px' }} className="album">
                {album.title}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Albums;

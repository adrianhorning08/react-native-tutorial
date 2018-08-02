import React, { Component }from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    };
  }

  async componentDidMount() {
    const response = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
    const albums = await response.json();
    this.setState({ albums });
  }

  renderAlbums() {
    return this.state.albums.map(album => {
      return (
        <AlbumDetail
          key={album.title}
          album={album}
        />
      );
    });
  }

  render() {
    return this.state.albums.length > 0 ?
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
      : null;
  }
}

export default AlbumList;

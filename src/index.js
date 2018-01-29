import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null 
    };

    YTSearch({ key: YOUTUBE_API_KEY, term: 'surboards' }, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return ( 
      <div>
        <SearchBar />
        <VideoDetail video={ this.state.selectedVideo }/>
        <VideoList
          onVideoSelect={ (selectedVideo) => this.setState({ selectedVideo }) }
          videos={ this.state.videos } 
        />
      </div>
    );  
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
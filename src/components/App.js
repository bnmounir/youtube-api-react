import React from 'react';
import youtube from '../api/youtube';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onTermSearch('popular videos');
    }

    onTermSearch = async term => {
        const res = await youtube.get('/search', { params: { q: term } });

        this.setState({
            videos: res.data.items,
            selectedVideo: res.data.items[0]
        });
    };

    onVideoSelect = video => {
        this.setState({
            selectedVideo: video
        });
    };

    render() {
        return (
            <div className='ui container'>
                <SearchBar onFormSubmit={this.onTermSearch}></SearchBar>
                <div className='ui grid'>
                    <div className='ui stackable row'>
                        <div className='eleven wide column'>
                            <VideoDetail
                                video={this.state.selectedVideo}
                            ></VideoDetail>
                        </div>
                        <div className='five wide column'>
                            <VideoList
                                onVideoSelect={this.onVideoSelect}
                                videos={this.state.videos}
                            ></VideoList>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

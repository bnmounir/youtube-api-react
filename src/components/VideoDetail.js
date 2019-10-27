import React from 'react';

const VideoDetail = ({ video }) =>
    video ? (
        <div>
            <div className='ui segment'>
                <div className='ui embed'>
                    <iframe
                        title='video-player'
                        width='560'
                        height='315'
                        src={`https://www.youtube.com/embed/${video.id.videoId}`}
                        frameBorder='0'
                        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                    ></iframe>
                </div>
                <h4 className='ui header'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    ) : (
        <div className='ui segment'>
            <p>Loading...</p>
            <div className='ui active large centered inline loader'></div>
        </div>
    );

export default VideoDetail;

import React, { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBiZX5cTeloahKDGi1o7T_-zcj1MBtcdCk", requestOptions)
      .then(response => response.json())  //fetch가 받아지면 반응들 json으로 변환하고
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));

  }, []);

  return (
    <VideoList videos={videos} />
  );
}

export default App;

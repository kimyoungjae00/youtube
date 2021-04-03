import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App({youtube}) { //필요한 dependency를 외부로부터 받아와야 한다.
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    youtube
    .mostPopular()
    .then(videos => setVideos(videos));
  }, []);

  const handleSearch = (query) => {
    youtube
    .search(query)
    .then(videos => setVideos(videos));
  }

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={handleSearch}/>
      <VideoList videos={videos} />
    </div>
  );
}

export default App;

import React, { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import Aside from './components/aside/aside';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({youtube}) { //필요한 dependency를 외부로부터 받아와야 한다.
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(()=>{
    youtube
    .mostPopular()
    .then(videos => setVideos(videos));
  }, [youtube]);

  const handleSearch = useCallback(
    (query) => {
      youtube
      .search(query)
      .then(videos => {
        setVideos(videos);
        setSelectedVideo(null);
      });
    },[youtube])

  const selectVideo = (video) => {
    setSelectedVideo(video);
  }

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={handleSearch}/>
      <div className={styles.body}>
        <Aside/>
        <section className={styles.content}>
          {selectedVideo && (
            <div className={styles.detail}>
              <VideoDetail video={selectedVideo} />
            </div>
          )}
          <div className={styles.list}>
            <VideoList 
              videos={videos} 
              onSelect={selectVideo}
              display={selectedVideo ? 'list' : 'grid'}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;

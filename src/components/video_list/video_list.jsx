import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css'
const VideoList = (props) => (
      <ul className={styles.videos}>
        {props.videos.map(video => (
        <VideoItem 
          key={video.id} 
          video={video} 
          onSelect={props.onSelect}
          display={props.display}
        />
        ))}
      </ul>
  );

export default VideoList;
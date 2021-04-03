import React from 'react';
import styles from './video_item.module.css'

const VideoItem = (props) => { 
    
    const handleSelectVideo = () => {
      props.onSelect(props.video);
    }

    const displayType = props.display === 'list' ? styles.list : styles.grid;

    return (
      <li className={`${styles.container} ${displayType}`}  >
        <div className={styles.video} onClick={handleSelectVideo}>
          <img
            className={styles.thumbnail}  
            src={props.video.snippet.thumbnails.medium.url}
            alt="video thumbnail"
            />
          <div className={styles.metadata}>
            <p className={styles.title}>{props.video.snippet.title}</p>
            <p className={styles.channel}>{props.video.snippet.channelTitle}</p>         
          </div>
        </div>
      </li>
    )
}

export default VideoItem;
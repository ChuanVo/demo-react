import { useState } from "react";
import Menu from './menu'
import Video from './video'

const VIDEO_SOURCES = [
  {
    key: 'deer',
    name: 'Con Nai',
    src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4'
  },
  {
    key: 'snail',
    name: 'Ốc Sên',
    src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4'
  },
  {
    key: 'cat',
    name: 'Con Mèo',
    src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4'
  },
  {
    key: 'spider',
    name: 'Con Nhện',
    src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
  }
]

function VideoPlayer() {
  const [selectedVideo, setSelectedVideo] = useState(VIDEO_SOURCES[0])

  function onSelectVideo(event) {
    const selectedVideoKey = event.target.value

    const video = VIDEO_SOURCES.find((video) => video.key === selectedVideoKey)

    if (video) {
      setSelectedVideo(video)
    }
  }

  return(
    <div>
      <h1>Video Player</h1>
       <Menu
        selectedMenu={selectedVideo.key}
        menu={VIDEO_SOURCES}
        handleMenuChange={onSelectVideo}
        /> 
      <Video key={selectedVideo.src} src={selectedVideo.src} /> 
    </div>
  )
}

export default VideoPlayer
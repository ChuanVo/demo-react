import './style.css'

function Video(props) {
  return (
    <div>
      <video className='video' controls loop autostart={'true'} autoPlay={true} >
        <source src={props.src} type="video/mp4"/>
      </video>
    </div>
  )
}

export default Video
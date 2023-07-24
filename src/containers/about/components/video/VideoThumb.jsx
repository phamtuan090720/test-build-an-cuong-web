import React from 'react'

const VideoComponent = ({ show, src, title, img }) => {
  const videoRef = React.useRef(null)

  React.useEffect(() => {
    if (show && videoRef.current) {
      videoRef.current.src += '?autoplay=1'
    }
  }, [show])
  return !show ? (
    <>
      <div className='title-video'>
        <h3>{title}</h3>
      </div>
      <div className='slide-video-wrapper'>
        <a className='slide-video' href={src} style={{ display: 'none' }} />
        <div className='slide-video-play-icon' />
        <div
          className='slide-video-tn'
          style={{
            opacity: 1,
            backgroundImage: `url(${img})`
          }}
        ></div>
      </div>
    </>
  ) : (
    <div className='slide-video-frame'>
      <iframe
        ref={videoRef}
        width='100%'
        height='100%'
        src={src}
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        {...(show && { autoPlay: '1' })}
      ></iframe>
    </div>
  )
}

export default VideoComponent

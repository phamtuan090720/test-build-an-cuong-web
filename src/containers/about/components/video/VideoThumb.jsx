import Loading from '@/components/loading'
import React, { useState } from 'react'
import { styled } from 'styled-components'
const ContainerVideoIframe = styled.div`
  position: relative;
  .loading-video{
    position: absolute;
    top: 45%;
    left: 45%;
    transform: translate(-50%,-50%);
    z-index: 1000000;
  }
  .hidden{
    opacity: 0;
  }
`
const VideoComponent = ({ show, src, title, img }) => {
  const videoRef = React.useRef(null)
  const [loading, setLoading] = useState(false)
  React.useEffect(() => {
    if (show && videoRef.current) {
      videoRef.current.src += '?autoplay=1playsinline=0'
      setLoading(true);
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
    <>
      {<ContainerVideoIframe className='slide-video-frame'>
        {loading ? <Loading className="loading-video" /> : <></>}
        <iframe
          ref={videoRef}
          width='100%'
          height='100%'
          src={src}
          frameborder='0'
          allow='autoplay; encrypted-media'
          allowfullscreen
          onLoad={() => {
            setLoading(false)
          }}
          {...(show && { autoPlay: '1' })}
        >
        </iframe>
      </ContainerVideoIframe>}
    </>

  )
}

export default VideoComponent

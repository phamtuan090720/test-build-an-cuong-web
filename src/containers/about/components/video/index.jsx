import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { styled } from 'styled-components'
import VideoComponent from './VideoThumb'
const SliderStyled = styled(Slider)`
  max-width: 980px;
  min-width: 200px;
  width: 100%;
`
const ContainerIn = styled.div`
  .wrap-slider-video {
    max-width: 80%;
    width: fit-content;
    margin: 0 auto;
    position: relative;
    .btn-next {
      background: url(/images/next.svg) no-repeat center center/contain;
      transition: all 0.3s ease-in-out;
      width: 80px;
      height: 80px;
      position: absolute;
      right: -80px;
      top: 50%;
      transform: translateY(-50%);
      @media (max-width: 1024px) {
        display: none;
      }
    }
    .btn-prev {
      background: url(/images/previous.svg) no-repeat center center/contain;
      transition: all 0.3s ease-in-out;
      width: 80px;
      height: 80px;
      position: absolute;
      left: -80px;
      top: 50%;
      transform: translateY(-50%);
      @media (max-width: 1024px) {
        display: none;
      }
    }
  }
`

const Video = () => {
  const slider = React.useRef(null)
  const [page, setPage] = useState(0)
  const [playVideo, setPlayVideo] = useState(0)
  useEffect(() => {
    if (slider.current) {
      slider.current?.slickGoTo(page)
    }
  }, [])
  const setting = {
    className: 'thumbnail-slider',
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    lazyLoad: true,
    beforeChange: (current, index) => {
      setPage(index)
    }
  }

  return (
    <section
      className='content-page set-post'
      data-post='video'
      data-href='https://www.ancuong.com/vi/gioi-thieu/video-2.html'
      data-title='VIDEO'
      data-description
      data-keyword
    >
      <h2 className='color-grey ani-item'>
        <span className='word1'>
          <span className='char1'>
            <span className='char1'>V</span>
          </span>
          <span className='char2'>
            <span className='char1'>I</span>
          </span>
          <span className='char3'>
            <span className='char1'>D</span>
          </span>
          <span className='char4'>
            <span className='char1'>E</span>
          </span>
          <span className='char5'>
            <span className='char1'>O</span>
          </span>
        </span>{' '}
      </h2>
      <div className='investment' style={{ opacity: 1 }}>
        <ContainerIn className='container-in'>
          <div className='wrap-slider-video'>
            <SliderStyled ref={slider} {...setting} prevArrow={null} nextArrow={null}>
              <div className='item-video' onClick={() => setPlayVideo(1)}>
                <VideoComponent
                  src='https://www.youtube.com/embed/yv9DjTvBzGg'
                  img='/images/2000-x-1115.jpg'
                  title='AN CƯỜNG - VER 2029'
                  show={playVideo === 1}
                />
              </div>
              <div className='item-video' onClick={() => setPlayVideo(2)}>
                <VideoComponent
                  src='https://www.youtube.com/embed/CHinU9ageE8'
                  img='/images/bg.jpg'
                  title='AN CƯỜNG - VER 2020'
                  show={playVideo === 2}
                />
              </div>
            </SliderStyled>
            <button onClick={() => slider?.current?.slickPrev()} className='btn-prev'></button>
            <button onClick={() => slider?.current?.slickNext()} className='btn-next'></button>
          </div>
          <div className='bottom-video'>
            <div className='thumbs-video color-grey slide-slidebox slide-drag center-slidebox'>
              <div
                className={classNames({
                  'active current': page === 0,
                  'slide-item': true
                })}
                style={{ width: '95.833px', marginRight: 5 }}
                onClick={() => {
                  slider.current?.slickGoTo(0)
                }}
              >
                <div
                  className='thumb-item'
                  data-thumb='https://youtu.be/yv9DjTvBzGg'
                  data-src='https://www.ancuong.com/pictures/catalog/about/he-thong-showroom/dat-cuoc/2000-x-1115.jpg'
                >
                  <button aria-label='thumb'>
                    <img src='/images/2000-x-1115.jpg' alt='pic' />
                  </button>
                </div>
              </div>
              <div
                className={classNames({
                  'active current': page === 1,
                  'slide-item': true
                })}
                style={{ width: '95.833px', marginRight: 5 }}
                onClick={() => {
                  slider.current?.slickGoTo(1)
                }}
              >
                <div className='thumb-item' data-thumb='https://youtu.be/CHinU9ageE8' data-src='/images/bg.jpg'>
                  <button aria-label='thumb'>
                    <img src='/images/bg.jpg' alt='pic' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ContainerIn>
      </div>
    </section>
  )
}

export default Video

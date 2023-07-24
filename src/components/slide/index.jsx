import classNames from 'classnames'
import React, { Fragment } from 'react'
import Slider from 'react-slick'
import { styled } from 'styled-components'
const ContainerIn = styled.div`
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
  .hidden {
    display: none;
  }
  li button:before {
    font-size: 12px;
  }
`

const Slide = ({ listItems, slickConfig, ...props }) => {
  const slider = React.useRef(null)
  const [page, setPage] = React.useState(0)
  const defaultSlickConfig = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: '50%',
          padding: '10px',
          margin: '0 2px',
          minHeight: '30px',
          position: 'relative',
          bottom: '0'
        }}
      >
        <ul style={{ margin: '0px', justifyContent: 'center' }}>{dots}</ul>
      </div>
    )
    // customPaging: (i) => (i === currentSlide ? <DotActiveSlide>{i + 1}</DotActiveSlide> : <DotSlide>{i + 1}</DotSlide>)
  }

  const mergedConfig = { ...defaultSlickConfig, ...slickConfig }
  console.log('🚀 ~ file: index.jsx:69 ~ Slide ~ mergedConfig:', mergedConfig)
  React.useEffect(() => {
    if (slider.current) {
      slider.current?.slickGoTo(page)
    }
  }, [])
  return (
    <ContainerIn>
      <Slider {...mergedConfig} ref={slider} {...props}>
        {listItems.map((item, index) => (
          <Fragment key={index}>{item}</Fragment>
        ))}
      </Slider>
      <button
        onClick={() => slider?.current?.slickPrev()}
        className={classNames({ 'btn-prev': true, hidden: listItems.length <= mergedConfig?.slidesToShow })}
      ></button>
      <button
        onClick={() => slider?.current?.slickNext()}
        className={classNames({ 'btn-next': true, hidden: listItems.length <= mergedConfig?.slidesToShow })}
      ></button>
    </ContainerIn>
  )
}

export default Slide

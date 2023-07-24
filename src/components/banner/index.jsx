import React from 'react'

const Banner = ({ items = [] }) => {
  console.log('🚀 ~ file: index.jsx:4 ~ Banner ~ items:', items)
  return (
    <div className='slide-mask' data-time={5000}>
      {items.map((item, index) => {
        return (
          <div className='wrap-bg-home' key={index}>
            <div
              className='bg-home center-text'
              style={{
                backgroundImage: `url(${item?.image})`
              }}
            ></div>
            <div className='slide-overlay' />
            <span className='time-banner' />
          </div>
        )
      })}
    </div>
  )
}

export default Banner

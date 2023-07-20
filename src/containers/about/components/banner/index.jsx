import React from 'react'
import Banner from '@/components/banner'

const BannerAbout = () => {
  return (
    <section className='banner-home'>
      <Banner
        items={[
          {
            image: '/images/show-rooms/ANCUONG-HCM.jpg'
          },
          {
            image: '/images/show-rooms/ANCUONG-HN.jpg'
          },
          {
            image: '/images/show-rooms/ANCUONG-DANANG.jpg'
          },
          {
            image: '/images/show-rooms/ANCUONG-HCM-Q2.jpg'
          },
          {
            image: '/images/show-rooms/ANCUONG-Q9.jpg'
          }
        ]}
      />
    </section>
  )
}

export default BannerAbout

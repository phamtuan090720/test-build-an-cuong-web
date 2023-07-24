import LayoutApp from '@/app/layout'
import React from 'react'
import BannerProduct from './components/banner'
import Tab from '@/components/tab'
import Description from './components/description'
import Trend from './components/trend'
import Woodgrains from './components/woodgrains'
import Colors from './components/colors'
import Patterns from './components/patterns'
import Catalogue from './components/catalogue'
import Applicants from './components/applicants'

const Product = () => {
  const tabs = [
    { label: 'Mô tả', content: <Description /> },
    { label: 'Trend', content: <Trend /> },
    { label: 'Woodgrains', content: <Woodgrains /> },
    { label: 'Solid Colors', content: <Colors /> },
    { label: 'Patterns', content: <Patterns /> },
    { label: 'Ứng dụng', content: <Applicants /> },
    { label: 'Catalogue', content: <Catalogue /> }
  ]
  return (
    <LayoutApp>
      <div>
        <div className='container' id='product-page' style={{ opacity: 1 }}>
          <div className='title-page' id='product-01' style={{ top: '578.987px' }}>
            <h1>
              <span className='line1'>
                <span className='char1 move'>
                  <span className='char1'>S</span>
                </span>
                <span className='char2 move'>
                  <span className='char1'>ả</span>
                </span>
                <span className='char3 move'>
                  <span className='char1'>n</span>
                </span>
                <span className='char4 move'>
                  <span className='char1'> </span>
                </span>
                <span className='char5 move'>
                  <span className='char1'>p</span>
                </span>
                <span className='char6 move'>
                  <span className='char1'>h</span>
                </span>
                <span className='char7 move'>
                  <span className='char1'>ẩ</span>
                </span>
                <span className='char8 move'>
                  <span className='char1'>m</span>
                </span>
              </span>
            </h1>
          </div>
          <section className='banner-inner'>
            <button className='stop' aria-label='stop' />
            <button className='play' aria-label='play' />
            <div
              className='slide-mask show slide-slidebox'
              data-time={5000}
              style={{ transform: 'translate3d(0px, 0px, 0px)' }}
            >
              <div className='slide-wrapper-outer'>
                <div
                  className='slide-wrapper'
                  style={{ transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: '1168px' }}
                >
                  <div className='slide-item ani-text active' style={{ width: '1167.2px' }}>
                    <div className='wrap-bg-home'>
                      <div
                        className='bg-inner'
                        style={{
                          backgroundImage:
                            'url(https://www.ancuong.com/pictures/catalog/banner-website/5-7-2023/melamine/MAISON-01-final-web.jpg)'
                        }}
                      >
                        <div className='slide-overlay' />
                      </div>
                      <span className='time-banner' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='slide-buttons disabled'>
                <div className='slide-prev'>
                  <svg viewBox='0 0 60 60'>
                    <path
                      className='arrow'
                      fill='currentColor'
                      d='M35.5,42 37.5,40.2 26.4,30 37.5,19.8 35.5,18 22.5,30z'
                    />
                  </svg>
                </div>
                <div className='slide-next'>
                  <svg viewBox='0 0 60 60'>
                    <path
                      className='arrow'
                      fill='currentColor'
                      d='M24.5,42 22.5,40.2 33.6,30 22.5,19.8 24.5,18 37.5,30z'
                    />
                  </svg>
                </div>
              </div>
              <div className='slide-pagination disabled'>
                <div className='slide-page active'>
                  <span>
                    {'{'}/*{' '}
                    <svg>
                      <circle className='circle-outer' cx={8} cy={8} r='6.2' style={{ animationDuration: '50000ms' }} />
                    </svg>{' '}
                    */{'}'}
                  </span>
                </div>
              </div>
            </div>
          </section>
          <div className='outer-nav ani-item on-show'>
            <span className='group'>Sản phẩm chính</span>
            <h2>VÁN MFC &amp; CÁC LOẠI VÁN PHỦ MELAMINE</h2>
            <Tab tabs={tabs} />
          </div>
          <section className='content-page last-section'>
            <h2 className='color-orange ani-item on-show'>
              <span className='word1'>
                <span className='char1'>
                  <span className='char1'>T</span>
                </span>
                <span className='char2'>
                  <span className='char1'>R</span>
                </span>
                <span className='char3'>
                  <span className='char1'>U</span>
                </span>
                <span className='char4'>
                  <span className='char1'>N</span>
                </span>
                <span className='char5'>
                  <span className='char1'>G</span>
                </span>
              </span>
              <span className='word2'>
                <span className='char1'>
                  <span className='char1'>T</span>
                </span>
                <span className='char2'>
                  <span className='char1'>Â</span>
                </span>
                <span className='char3'>
                  <span className='char1'>M</span>
                </span>
              </span>
              <span className='word3'>
                <span className='char1'>
                  <span className='char1'>D</span>
                </span>
                <span className='char2'>
                  <span className='char1'>Ị</span>
                </span>
                <span className='char3'>
                  <span className='char1'>C</span>
                </span>
                <span className='char4'>
                  <span className='char1'>H</span>
                </span>
              </span>
              <span className='word4'>
                <span className='char1'>
                  <span className='char1'>V</span>
                </span>
                <span className='char2'>
                  <span className='char1'>Ụ</span>
                </span>
              </span>
              <span className='word5'>
                <span className='char1'>
                  <span className='char1'>K</span>
                </span>
                <span className='char2'>
                  <span className='char1'>H</span>
                </span>
                <span className='char3'>
                  <span className='char1'>Á</span>
                </span>
                <span className='char4'>
                  <span className='char1'>C</span>
                </span>
                <span className='char5'>
                  <span className='char1'>H</span>
                </span>
              </span>
              <span className='word6'>
                <span className='char1'>
                  <span className='char1'>H</span>
                </span>
                <span className='char2'>
                  <span className='char1'>À</span>
                </span>
                <span className='char3'>
                  <span className='char1'>N</span>
                </span>
                <span className='char4'>
                  <span className='char1'>G</span>
                </span>
              </span>
            </h2>
            <div className='hotline ani-item on-show' style={{}}>
              <small className='icon-phone'>
                <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 60 60'>
                  <path
                    fill='currentColor'
                    d='M42.2,34L42.2,34c0,0-4.8-2.6-6.9-4.2c-0.6-0.6-1.9-0.6-2.2-0.6c-1.1,0-1.7,0.8-1.7,0.8l0,0
c0,0-0.5,0.5-1.2,1.1c-0.9,0.8-2,0.8-3-0.3c-1.4-1.1-8.1-9-10.3-11.5c-0.5-0.6-0.8-1.1-0.8-1.7c0.2-1.1,1.4-1.9,1.9-2.3l0.2-0.2
c1.4-0.9,1.6-2.5,1.1-3.6c-0.5-0.6-3.1-6.4-3.4-7c-0.6-0.5-1.1-1.2-2.5-1.2c-0.9,0-5,1.7-5,1.7c-1.4,0.9-3.7,2.6-3.6,6.2
c0.2,4.4,3.6,10.8,10.9,19.5c7.5,9.5,16.2,13.7,20,13.6c3.1-0.2,6.2-4.2,7-6.2C43.6,36,42.9,34.6,42.2,34z'
                  />
                  <path
                    fill='currentColor'
                    d='M35.6,3.6C31.7,3,28.1,3.1,24.5,4.1c-1.7,0.5-2.8,2.3-2.2,4.1l0,0c0.2,0.3,0.6,0.6,0.9,0.5
c3.9-1.4,8.1-1.7,12.6-0.8c9.5,2.2,16.7,10.3,17.6,20c1.2,13.6-9.4,24.9-22.6,24.9c-12.5,0-22.8-10.1-22.8-22.8c0-0.5,0-0.9,0-1.4
l-0.9-0.9c-1.1-1.1-3-0.5-3.1,1.1C4,32.7,4.6,37,6.8,41.3C11.1,50.2,20,56.4,30,56.6c16.7,0.3,29.6-13.7,27.6-30.2
C56,14.8,47,5.6,35.6,3.6z'
                  />
                </svg>
                {'{'}' '{'}'}
              </small>
              <span>Hotline</span>
              <a href='tel:19006944'>1900 6944</a>
            </div>
            <div className='service-box ani-item on-show'>
              <ul>
                <li>
                  <p>
                    HÀ NỘI: <a href='tel:0246281719'>(84) 024 6281 4719</a>
                  </p>
                </li>
                <li>
                  <p>
                    TP.HCM: <a href='tel:02838625726'>(84) 028 3862 5726</a>
                  </p>
                </li>
                <li>
                  <p>
                    ĐÀ NẴNG: <a href='tel:02367307899'>(84) 0236 730 7899</a>
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <div className='class-hidden zoom-active' />
        <div className='class-hidden sub-active' />
        <div className='class-hidden appid-active' />
      </div>
    </LayoutApp>
  )
}

export default Product

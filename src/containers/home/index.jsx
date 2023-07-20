import React from 'react'
import LayoutApp from '@/app/layout'

const Home = () => {
  return (
    <LayoutApp>
      {/* <Header /> */}
      <div className='container' id='home-page'>
        <div className='title-page'>
          <h1>Trang chủ</h1>
        </div>
        <section className='banner-home'>
          <div className='slide-mask' data-time={5000}>
            <div className='wrap-bg-home'>
              <div
                className='bg-home center-text'
                style={{
                  backgroundImage:
                    'url(https://www.ancuong.com/pictures/catalog/banner-website/ke-vat-lieu/AC4502-1.jpg)'
                }}
              ></div>
              <div className='slide-overlay' />
              <span className='time-banner' />
            </div>
            <div className='wrap-bg-home'>
              <div
                className='bg-home center-text'
                style={{
                  backgroundImage:
                    'url(https://www.ancuong.com/pictures/catalog/banner-website/trang-chu/mfc/MFC-banner-chinh.jpg)'
                }}
              ></div>
              <div className='text-banner'>
                <div className='description'>
                  <a
                    className='go-page'
                    href='https://www.ancuong.com/vi/san-pham/san-pham-chinh/van-mfc--cac-loai-van-phu-melamine/melamine-phu-tren-van-dam-mfc/page-description.html'
                    aria-label='go-inner'
                  />
                  <h2>MFC </h2>
                </div>
              </div>
              <div className='slide-overlay' />
              <span className='time-banner' />
            </div>
            <div className='wrap-bg-home'>
              <div
                className='bg-home center-text'
                style={{
                  backgroundImage:
                    'url(https://www.ancuong.com/pictures/catalog/banner-website/trang-chu/laminate/LK.jpg)'
                }}
              ></div>
              <div className='text-banner'>
                <div className='description'>
                  <a
                    className='go-page'
                    href='https://www.ancuong.com/vi/san-pham/san-pham-chinh/tam-laminates/laminate-kingdom-2/page-description.html'
                    aria-label='go-inner'
                  />
                  <h2>Laminate </h2>
                </div>
              </div>
              <div className='slide-overlay' />
              <span className='time-banner' />
            </div>
            <div className='wrap-bg-home'>
              <div
                className='bg-home center-text'
                style={{
                  backgroundImage:
                    'url(https://www.ancuong.com/pictures/catalog/banner-website/trang-chu/acrylic/Acrylic-banner-chinh.jpg)'
                }}
              ></div>
              <div className='text-banner'>
                <div className='description'>
                  <a
                    className='go-page'
                    href='https://www.ancuong.com/vi/san-pham/san-pham-chinh/tam-acrylic-bong-guong/high-gloss-acrylic.html'
                    aria-label='go-inner'
                  />
                  <h2>High Gloss Acrylic </h2>
                </div>
              </div>
              <div className='slide-overlay' />
              <span className='time-banner' />
            </div>
            <div className='wrap-bg-home'>
              <div
                className='bg-home center-text'
                style={{
                  backgroundImage:
                    'url(https://www.ancuong.com/pictures/catalog/banner-website/trang-chu/van-san/AC-444-PL.jpg)'
                }}
              ></div>
              <div className='text-banner'>
                <div className='description'>
                  <a
                    className='go-page'
                    href='https://www.ancuong.com/vi/san-pham/san-pham-chinh/van-san/san-go-cong-nghiep-an-cuong---8mm--12mm/page-description.html'
                    aria-label='go-inner'
                  />
                  <h2>Laminate Flooring </h2>
                </div>
              </div>
              <div className='slide-overlay' />
              <span className='time-banner' />
            </div>
          </div>
        </section>
        <section className='content-home'>
          <div className='nav-home ani-item'>
            <ul>
              <li>
                <span>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
                    <path
                      fill='currentColor'
                      d='M13.7,50.5c-0.7,0-1.4-0.3-1.8-0.9c-0.4-0.5-0.5-1.1-0.4-1.7c0.1-0.6,0.4-1.1,0.9-1.5l34.2-26.1
c0.4-0.3,0.9-0.5,1.4-0.5l0,0h0.1c0.5,0,1,0.2,1.4,0.5l34.2,26.1c1,0.8,1.2,2.2,0.4,3.2c-0.4,0.6-1.1,0.9-1.8,0.9l0,0
c-0.5,0-1-0.2-1.4-0.5L48,25L15.1,50.1C14.7,50.4,14.2,50.5,13.7,50.5z'
                    />
                    <path fill='currentColor' d='M55.6,43.3 47.3,43.3 39.1,43.3 39.1,51.7 55.6,51.7z'></path>
                    <path
                      fill='currentColor'
                      d='M85.8,54.2 82.3,54.2 82.3,73.1 79.4,73.1 79.4,54.2 74.4,54.2 70.7,54.2 70.7,78.8 71.1,78.8 
79.4,78.8 82.3,78.8 89.2,78.8 91,78.8 91,54.2z'
                    />
                    <path
                      fill='currentColor'
                      d='M59.2,54.1 59.2,56.4 48.4,56.4 39.1,56.4 39.1,64.8 46.3,64.8 46.3,68.2 44.4,68.2 32.6,68.2 
32.6,78.7 55.6,78.7 55.6,68.2 55.6,68.2 55.6,64.8 59.2,64.8 59.2,78.7 67.9,78.7 67.9,54.1 62.6,54.1z'
                    />
                  </svg>
                </span>
                <a className='link-load' href='https://www.ancuong.com/vi/san-pham/vat-lieu.html'>
                  Vật liệu
                </a>
              </li>
              <li>
                <span>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
                    <path
                      fill='currentColor'
                      d='M75,20.4l-42.4,5.1v65.7l42.7-11.5L75,20.4z M37.3,85.3V29.8l33.6-4.4l0.2,50.2L37.3,85.3z'
                    ></path>
                    <path fill='currentColor' d='M41.1,65.4 46.4,64.5 46.4,52.1 41.1,53z' />
                    <path
                      fill='currentColor'
                      d='M19.3,12.3 19.3,72.6 25.2,72.6 25.2,18.1 77.8,18.1 77.8,72.6 82.9,72.6 82.9,12.3z'
                    ></path>
                  </svg>
                </span>
                <a className='link-load' href='https://www.ancuong.com/vi/san-pham/phu-kien-2.html'>
                  Phụ kiện
                </a>
              </li>
              <li>
                <span>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
                    <path
                      fill='currentColor'
                      d='M70.8,80.1 70.8,37.9 66.7,37.9 66.7,80.1 61.3,80.1 61.3,82.5 76.1,82.5 76.1,80.1z'
                    ></path>
                    <path
                      fill='currentColor'
                      d='M88.3,36.3L76.2,12.6H62.1L48.8,36.3H88.3z M64.3,15.1h9.8l9.7,18.6H53.9L64.3,15.1z'
                    ></path>
                    <path
                      fill='currentColor'
                      d='M66.9,31.8v-2.5c-0.1-0.5-0.3-1.1-0.8-1.8c0,0-0.2-0.3-0.3-0.3l-0.1-0.1v-0.2l0-0.1c-0.3-0.5-0.8-1.5-0.8-2.5
c0-2.6,2.2-4.8,4.8-4.8c2.6,0,4.8,2,5,4.7c-0.1,1.4-0.8,2.5-1,2.8l-0.3,0.4c-0.4,0.7-0.8,1.2-0.8,1.8l0,2.4h-2.1V29
c0.1-1.2,0.6-2.1,1.2-2.9l0.3-0.4l0.1,0.1c0.2-0.3,0.3-0.8,0.3-1.1c0-1.4-1.2-2.6-2.6-2.6s-2.6,1.2-2.6,2.6c0,0.5,0.3,1.2,0.5,1.5
c0.1,0.1,0.2,0.2,0.2,0.4c0.6,0.7,1.1,1.6,1.2,2.7l0,2.6H66.9z'
                    />
                    <path fill='currentColor' d='M12.5,80 18.1,80 23.3,80 23.3,82.2 12.5,82.2z' />
                    <path fill='currentColor' d='M47.7,80 52.4,80 58.5,80 58.5,82.2 47.7,82.2z' />
                    <path
                      fill='currentColor'
                      d='M11.8,78.2V60.7c0-3.3,2.8-6.1,6.1-6.1s6.1,2.8,6.1,6.1V63h22.9v-2.3c0-3.3,2.8-6.1,6.1-6.1
c3.5,0.1,6.1,2.8,6.1,6.2v17.4H11.8z M54.7,73.6V60.8c0-0.9-0.8-1.5-1.5-1.5c-0.9,0-1.5,0.8-1.5,1.5v7H19.5v-7
c0-0.9-0.8-1.5-1.5-1.5c-0.9,0-1.5,0.8-1.5,1.5v12.8H54.7z'
                    />
                    <path
                      fill='currentColor'
                      d='M51,53.2c-2.3,0-4.1-1.8-4.1-4.1v-4c0-0.9-0.8-1.5-1.5-1.5H25.5c-0.9,0-1.5,0.8-1.5,1.5v4c0,2.3-1.8,4.1-4,4.1
h-0.6v-8c0-3.3,2.8-6.1,6.1-6.1h20c3.3,0,6.1,2.8,6.1,6.1v8H51z'
                    />
                  </svg>
                </span>
                <a className='link-load' href='https://www.ancuong.com/vi/san-pham/noi-that.html'>
                  Nội thất
                </a>
              </li>
              <li>
                <span>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
                    <path
                      fill='currentColor'
                      d='M20.2,72.5 16.7,35.8 41,27.6 41.6,24.6 8.6,29.5 17,86 63.4,79 30.3,70.9z'
                    />
                    <path
                      fill='currentColor'
                      d='M47.4,12.7L33.8,68.1l45.6,11.2L93,23.9L47.4,12.7z M41.3,60.9l10-41.9l35.6,8.9l-8.5,36.3L41.3,60.9z'
                    ></path>
                  </svg>
                </span>
                <a className='link-load' href='https://www.ancuong.com/vi/catalogue.html'>
                  Online catalogue
                </a>
              </li>
              <li className='nav-home-vr'>
                <span>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
                    <path
                      fill='currentColor'
                      d='M49.4,16.5c-2.1-0.2-4.1,0-6.1,0.4l-3.7,0.9l2.8,2.5c1.1,1,1.6,2.3,1.4,3.8c-0.2,1.8-1.7,3.3-3.5,3.6
c-1.9,0.3-3.7-0.6-4.5-2.3L34.2,22l-1.9,3.3c-1.6,2.8-2.4,6-2.3,9.3c0.3,9.4,8.2,17.1,17.7,17.1h0.1c9.5-0.1,17.1-7.5,17.5-17
C65.6,25.4,58.7,17.4,49.4,16.5z M59.9,34.5c-0.3,6.5-5.6,11.7-12.1,11.8h-0.1c-6.5,0-12-5.3-12.2-11.8c0-1.3,0.1-2.6,0.5-3.9
c1.6,1.2,3.7,1.8,5.8,1.4c3.2-0.5,5.8-3.1,6.2-6.3c0.2-1.3,0-2.6-0.5-3.8c0.5,0,1,0,1.5,0.1C55.2,22.5,60.1,28.2,59.9,34.5z'
                    />
                    <path
                      fill='currentColor'
                      d='M95.9,40.3c-0.1-0.3-0.3-0.5-0.4-0.8c-0.1-0.1-0.5-0.9-0.5-0.9c-0.1-0.1-0.2-0.3-0.3-0.4l-0.8-1.1l-1.2-1.4
l-1.3-1.2c-0.5-0.4-1.2-0.9-1.8-1.4c-2.2-1.5-4.8-2.9-7.9-4c-2.8-1-5.6-1.7-8.4-2.1l-0.3,0C70.1,16,60,7.7,48,7.7
c-12.1,0-22.4,8.4-25.2,19.7l-0.5,0.1c-3,0.7-6.8,1.8-10.6,3.7c-1.9,1-3.6,2.1-5,3.5c-0.8,0.9-1.5,1.7-2.1,2.6
c-0.7,1.2-1.1,2.1-1.5,3c-0.4,1.2-0.7,2.3-0.8,3.3c-0.1,0.5-0.1,0.9-0.1,1.3l0,0.5l0,0.4c0,0.4,0,0.8,0.1,1.3c0.2,2.2,0.9,4.5,2,6.6
c0.6,1,1.2,2,1.9,2.8c0.1,0.1,0.2,0.2,0.3,0.4c0.2,0.3,0.5,0.6,0.7,0.8l1,1c0.3,0.3,0.6,0.5,0.8,0.7C9.3,59.5,9.9,60,9.9,60
c0.3,0.2,0.5,0.4,0.8,0.6l1.8,1.3l0.6,0.4c5.9,3.7,12.8,6.1,21.2,7.6c3,0.5,6.1,0.8,9.1,0.9c0.6,0,1.3,0,1.9,0c0.3,0,0.6,0,1,0
c0.6,0,1.2,0,1.8,0c0.9,0,1.9-0.1,2.7-0.1c0.5,0,1-0.1,1.4-0.1l-3.9,4.7l7.1-0.5l5.4-6.5l-6.1-5.8l-7.1,0.5l4.2,4
c-2.2-0.1-4.4-0.3-6.4-0.5c-4.3-0.5-7.5-1-10.4-1.7c-3.5-0.8-6.9-1.8-10.1-2.9c-3.3-1.2-6.5-2.7-9.3-4.5l-0.5-0.3l-1.6-1.1
c-0.2-0.1-0.4-0.3-0.6-0.5c-0.1-0.1-0.2-0.2-0.3-0.3c-0.1-0.1-0.3-0.2-0.4-0.3c-0.2-0.2-0.4-0.3-0.6-0.5l-1-0.9
c-0.2-0.1-0.3-0.3-0.4-0.5c-0.1-0.1-0.2-0.3-0.3-0.4c-0.5-0.6-1-1.2-1.4-1.8c-1.6-2.6-2-5.9-1.1-8.9c0.2-0.8,0.6-1.5,0.9-2.1
c0.4-0.7,0.8-1.3,1.3-1.9c0.5-0.5,1-1.1,1.7-1.7c0.6-0.5,1.3-1,2.1-1.5c2.7-1.8,5.8-3.2,8.8-4.6c-0.2,1.2-0.3,2.4-0.3,3.6
c0,14.3,11.6,26,26,26c14.3,0,26-11.6,26-26c0-1.3-0.1-2.6-0.3-3.9c2.2,0.9,4.4,1.9,6.5,3c2.5,1.3,4.6,2.7,6.5,4.2
c2,1.7,3.5,3.6,4.3,5.4c0.4,0.9,0.6,1.9,0.7,3c0,1-0.2,2-0.5,3c-0.7,1.9-2,3.7-4,5.7c-1.6,1.5-3.4,3-6.1,4.8
c-4.4,2.9-9.3,5.3-14,7.7l-1.8,0.9l0.7,1.9l1.7-0.4c5.8-1.3,11.1-3.3,16-5.9c2.9-1.6,5.3-3.2,7.3-5c2.7-2.4,4.5-5,5.5-7.8
c0.6-1.7,0.9-3.4,0.8-5.1C97,43.4,96.6,41.8,95.9,40.3z M48,55.6c-12.1,0-21.9-9.8-21.9-21.9S35.9,11.8,48,11.8
c12.1,0,21.9,9.8,21.9,21.9S60.1,55.6,48,55.6z'
                    />
                    <path
                      fill='currentColor'
                      d='M23.5,89.6 20.8,81.1 17.7,81.1 22.2,93.8 24.8,93.8 24.8,93.5 24.9,93.8 29.3,81.1 26.2,81.1z'
                    ></path>
                    <path
                      fill='currentColor'
                      d='M40,91.3c-0.2-1.4-0.4-2.3-0.6-2.7c-0.3-0.5-0.7-0.9-1.3-1c0.1,0,0.3,0,0.4-0.1c0.5-0.2,0.9-0.4,1.2-0.9
c0.4-0.6,0.6-1.3,0.6-2.1c0-0.8-0.2-1.5-0.6-2.1c-0.4-0.6-1-1-1.7-1.2c-0.4-0.1-0.8-0.2-1.3-0.2c-0.3,0-0.6,0-0.9,0l-3.1,0l0,0h-2.2
v12.7h2.8v-4.7l1.8,0c0.9,0,1.4,0.2,1.7,0.5c0.2,0.2,0.3,0.6,0.4,1c0,0.1,0.1,0.4,0.2,1.1c0.1,0.6,0.2,1.1,0.4,1.5
c0.1,0.2,0.2,0.4,0.3,0.5h3C40.5,93.2,40.2,92.4,40,91.3z M37.3,86c-0.3,0.5-0.9,0.8-1.8,0.8l-2.3,0v-3.3l2.1,0c1.1,0,1.7,0.2,2,0.6
c0.2,0.3,0.3,0.6,0.3,0.9C37.5,85.4,37.4,85.7,37.3,86z'
                    />
                    <path fill='currentColor' d='M79.7,76.8H80c0,0-0.1,0-0.1,0C79.8,76.8,79.8,76.8,79.7,76.8z' />
                    <path
                      fill='currentColor'
                      d='M45.8,90.7l2.5-0.3c0.1,0.6,0.3,1.1,0.6,1.4c0.3,0.3,0.8,0.5,1.2,0.5c0.5,0,1-0.2,1.3-0.6
c0.4-0.4,0.5-0.9,0.5-1.6c0-0.6-0.2-1.1-0.5-1.5c-0.3-0.4-0.8-0.6-1.3-0.6c-0.3,0-0.7,0.1-1.2,0.2l0.3-2.1c0.7,0,1.2-0.1,1.6-0.4
c0.4-0.3,0.5-0.7,0.5-1.3c0-0.4-0.1-0.8-0.4-1.1C50.8,83.1,50.4,83,50,83c-0.4,0-0.8,0.2-1.1,0.5c-0.3,0.3-0.5,0.7-0.6,1.3L46,84.4
c0.2-0.8,0.4-1.4,0.7-1.9s0.8-0.9,1.4-1.1c0.6-0.3,1.2-0.4,2-0.4c1.2,0,2.2,0.4,3,1.2c0.6,0.6,0.9,1.4,0.9,2.2
c0,1.2-0.6,2.1-1.9,2.8c0.8,0.2,1.4,0.5,1.8,1.1c0.5,0.6,0.7,1.2,0.7,2c0,1.2-0.4,2.2-1.3,3c-0.8,0.8-1.9,1.2-3.2,1.2
c-1.2,0-2.2-0.3-3-1C46.4,92.7,45.9,91.8,45.8,90.7z'
                    />
                    <path
                      fill='currentColor'
                      d='M64.8,84.2l-2.5,0.3c-0.1-0.5-0.2-0.9-0.5-1.1c-0.3-0.2-0.6-0.4-1-0.4c-0.5,0-1,0.2-1.4,0.7s-0.6,1.5-0.7,3
c0.6-0.7,1.4-1.1,2.4-1.1c1.1,0,2,0.4,2.7,1.2c0.8,0.8,1.1,1.8,1.1,3.1c0,1.4-0.4,2.4-1.2,3.3C63,94,62,94.4,60.7,94.4
c-1.3,0-2.4-0.5-3.3-1.6c-0.9-1-1.3-2.7-1.3-5.1c0-2.4,0.4-4.2,1.3-5.2c0.9-1.1,2.1-1.6,3.5-1.6c1,0,1.8,0.3,2.5,0.8
C64.2,82.3,64.6,83.2,64.8,84.2z M59,89.8c0,0.8,0.2,1.5,0.6,1.9c0.4,0.4,0.8,0.7,1.3,0.7c0.5,0,0.9-0.2,1.2-0.6
c0.3-0.4,0.5-1,0.5-1.8c0-0.9-0.2-1.5-0.5-1.9s-0.8-0.6-1.3-0.6c-0.5,0-0.9,0.2-1.2,0.6C59.2,88.5,59,89,59,89.8z'
                    />
                    <path
                      fill='currentColor'
                      d='M70.7,80.9c1.3,0,2.3,0.5,3,1.4c0.9,1.1,1.3,2.9,1.3,5.4c0,2.5-0.4,4.3-1.3,5.4c-0.7,0.9-1.7,1.4-3,1.4
c-1.3,0-2.3-0.5-3.1-1.5c-0.8-1-1.2-2.8-1.2-5.3c0-2.5,0.4-4.3,1.3-5.4C68.4,81.4,69.4,80.9,70.7,80.9z M70.7,83
c-0.3,0-0.6,0.1-0.8,0.3c-0.2,0.2-0.4,0.5-0.6,1.1c-0.2,0.7-0.3,1.8-0.3,3.3c0,1.6,0.1,2.6,0.2,3.2s0.4,1,0.6,1.2
c0.2,0.2,0.5,0.3,0.8,0.3c0.3,0,0.6-0.1,0.8-0.3c0.2-0.2,0.4-0.5,0.6-1.1c0.2-0.7,0.3-1.8,0.3-3.3c0-1.6-0.1-2.6-0.2-3.2
s-0.4-1-0.6-1.2C71.3,83.1,71,83,70.7,83z'
                    />
                    <path
                      fill='currentColor'
                      d='M76.7,83.6c0-0.8,0.3-1.5,0.8-2c0.6-0.6,1.2-0.8,2-0.8s1.5,0.3,2,0.8c0.6,0.6,0.8,1.2,0.8,2s-0.3,1.5-0.8,2
c-0.6,0.6-1.2,0.8-2,0.8s-1.5-0.3-2-0.8C77,85.1,76.7,84.4,76.7,83.6z M78.2,83.6c0,0.4,0.1,0.7,0.4,1c0.3,0.3,0.6,0.4,1,0.4
c0.4,0,0.7-0.1,1-0.4c0.3-0.3,0.4-0.6,0.4-1s-0.1-0.7-0.4-1c-0.3-0.3-0.6-0.4-1-0.4c-0.4,0-0.7,0.1-1,0.4
C78.4,82.9,78.2,83.3,78.2,83.6z'
                    />
                  </svg>
                </span>
                <a
                  className='link-blank'
                  href='https://www.ancuong.com/vr-360/'
                  target='_blank'
                  rel='nofollow noopener'
                >
                  3D- VR 360
                </a>
              </li>
            </ul>
          </div>
          <div className='news-home'>
            <div className='wrap-news'>
              <div className='content-right'>
                <div className='new-product ani-item'>
                  <a
                    className='link-load'
                    href='https://www.ancuong.com/vi/san-pham/san-pham-chinh/tam-lam-trang-tri/acoustic-panel.html'
                  >
                    <div className='pic-pro'>
                      <img
                        src='https://www.ancuong.com/pictures/catalog/products/decorative-panel/acoustic/spmoi.jpg'
                        alt='TẤM TRANG TRÍ ACOUSTIC'
                        loading='lazy'
                      />
                    </div>
                    <div className='new-title'>
                      <h2>Sản phẩm mới</h2>
                      <h3>TẤM TRANG TRÍ ACOUSTIC</h3>
                    </div>
                  </a>
                </div>
              </div>
              <div className='content-left'>
                <div className='big-news ani-item'>
                  <div className='box-news'>
                    <a
                      className='link-load'
                      href='https://www.ancuong.com/vi/tin-tuc/su-kien/showroom-hop-tac-go-an-cuong--tan-lan-nghia-tai-tp-cao-lanh.html'
                    >
                      <div className='date'>
                        17<span>07 - 2023</span>
                      </div>
                      <div className='pic-news'>
                        <img
                          src='https://www.ancuong.com/pictures/catalog/news/2023/khaitruong-tanlannghia/web.jpg'
                          alt='SHOWROOM HỢP TÁC GỖ AN CƯỜNG & TÂN LAN NGHĨA TẠI TP CAO LÃNH'
                          loading='lazy'
                        />
                      </div>
                      <h3>
                        <span>SHOWROOM HỢP TÁC GỖ AN CƯỜNG &amp;TÂN LAN NGHĨA TẠI TP CAO LÃNH</span>
                      </h3>
                    </a>
                  </div>
                </div>
                <div className='small-news ani-item'>
                  <div className='box-news'>
                    <a
                      className='link-load'
                      href='https://www.ancuong.com/vi/tin-tuc/ban-tin-an-cuong/an-cuong-fireproof-board---giai-phap-an-toan-chong-chay-hang-dau-cho-cong-trinh.html'
                    >
                      <div className='date'>
                        10<span>07 - 2023</span>
                      </div>
                      <h3>AN CƯỜNG FIREPROOF BOARD - GIẢI PHÁP AN TOÀN CHỐNG CHÁY HÀNG ĐẦU CHO CÔNG TRÌNH</h3>
                    </a>
                  </div>
                  <div className='box-news'>
                    <a
                      className='link-load'
                      href='https://www.ancuong.com/vi/tin-tuc/su-kien/be-mac-giai-bong-da-nam-nu-2023.html'
                    >
                      <div className='date'>
                        17<span>07 - 2023</span>
                      </div>
                      <h3>BẾ MẠC GIẢI BÓNG ĐÁ NAM NỮ 2023</h3>
                    </a>
                  </div>
                  <div className='box-news'>
                    <a
                      className='link-load'
                      href='https://www.ancuong.com/vi/tin-tuc/su-kien/khai-truong-showroom-hop-tac-go-an-cuong---noi-that-khong-gian-la-tai-tinh-binh-dinh.html'
                    >
                      <div className='date'>
                        14<span>07 - 2023</span>
                      </div>
                      <h3>KHAI TRƯƠNG SHOWROOM HỢP TÁC GỖ AN CƯỜNG - NỘI THẤT KHÔNG GIAN LẠ TẠI TỈNH BÌNH ĐỊNH.</h3>
                    </a>
                  </div>
                  <a className='view-all ani-item' href='https://www.ancuong.com/vi/tin-tuc.html'>
                    xem tất cả
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='main-news-home content-page'>
          <div className='wrap-content'>
            <div className='title-main ani-item color-orange text-center'>
              <h2>AN CƯỜNG INTERIOR DESIGN AWARD 2023</h2>
            </div>
            <div className='bg-main'>
              <span>Xem chi tiết</span>
              <a href='https://ida.ancuong.com/nam-2023.html' aria-label='go' rel='nofollow noopener' target='_blank' />
              <img
                src='https://www.ancuong.com/pictures/catalog/ida/2023/kv-seo.jpg'
                alt='Banner - News'
                loading='lazy'
              />
            </div>
          </div>
        </section>
        <section className='content-youtube'>
          <div className='wrap-content'>
            <div className='wrap-youtube-depict'>
              <div className='youtube-depict ani-item'>
                <a
                  href='https://www.youtube.com/@GoAnCuongOfficial'
                  target='_blank'
                  aria-label='youtube'
                  rel='nofollow noopener'
                >
                  <div className='youtube-depict-pic'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'>
                      <path
                        style={{ fill: '#FF0000' }}
                        d='M64.4,15.4c-0.7-2.6-2.8-4.7-5.4-5.4c-4.8-1.3-23.8-1.3-23.8-1.3s-19,0-23.8,1.2
c-2.6,0.7-4.7,2.8-5.4,5.4C4.8,20.1,4.8,30,4.8,30s0,9.9,1.2,14.6c0.7,2.6,2.8,4.7,5.4,5.4c4.8,1.3,23.8,1.3,23.8,1.3s19,0,23.8-1.2
c2.6-0.7,4.7-2.8,5.4-5.4c1.2-4.8,1.2-14.6,1.2-14.6S65.7,20.1,64.4,15.4z M28.6,40.1V19.9L46.1,30L28.6,40.1z'
                      />
                      <g>
                        <path
                          d='M109.8,20.7v21.6c0,1.9,0.2,3.2,0.5,4.1c0.5,1.4,1.6,2,3.4,2c1.9,0,3.9-1.1,5.9-3.4v3h5.2V20.7h-5.2v20.9
c-1.1,1.6-2.2,2.4-3.2,2.4c-0.7,0-1.1-0.4-1.2-1.2c0-0.1-0.1-0.7-0.1-1.9V20.7H109.8z'
                        />
                        <path
                          d='M97.9,48.4c2.6,0,4.6-0.9,6-2.8c1.1-1.4,1.6-3.5,1.6-6.5v-9.6c0-2.9-0.5-5.1-1.6-6.4c-1.4-1.9-3.4-2.8-6-2.8
c-2.5,0-4.5,0.9-6,2.8c-1.1,1.4-1.6,3.5-1.6,6.4v9.6c0,2.9,0.5,5.1,1.6,6.5C93.4,47.5,95.4,48.4,97.9,48.4z M95.5,28.6
c0-2.5,0.8-3.8,2.5-3.8c1.6,0,2.5,1.3,2.5,3.8v11.5c0,2.6-0.8,3.8-2.5,3.8c-1.6,0-2.5-1.3-2.5-3.8V28.6z'
                        />
                        <path
                          d='M83.4,48V33.2l6.9-21.9h-5.8l-3.9,14.4l-4-14.4h-6c1.1,3.1,2.3,6.5,3.7,10.3c1.8,5,2.9,8.9,3.5,11.6V48L83.4,48L83.4,48
L83.4,48z'
                        />
                      </g>
                      <g>
                        <polygon points='122.7,17.1 128.7,17.1 128.7,48.3 134.4,48.3 134.4,17.1 140.5,17.1 140.5,17.1 140.5,11.9 122.7,11.9 	' />
                        <path
                          d='M150.8,41.9c-1.1,1.5-2.2,2.3-3.2,2.3c-0.7,0-1.1-0.4-1.2-1.1c0-0.1-0.1-0.7-0.1-1.9v-20h-5.1v21.4c0,1.8,0.2,3.1,0.5,4
c0.5,1.4,1.6,2,3.3,2c1.8,0,3.8-1.1,5.8-3.3v3h5.1h0V21.2h-5.1V41.9z'
                        />
                        <path
                          d='M170.7,20.9c-1.9,0-3.7,1-5.3,3V11.9h-5.1v36.3h5.1v-2.6c1.7,2,3.5,3,5.3,3c2.1,0,3.4-1,4-3c0.3-1,0.5-2.8,0.5-5.5V29.4
c0-2.7-0.2-4.5-0.5-5.4C174.1,21.9,172.8,20.9,170.7,20.9z M170.2,40.6c0,2.4-0.7,3.7-2.2,3.7c-0.9,0-1.7-0.4-2.6-1.2V26.5
c0.8-0.8,1.7-1.2,2.6-1.2c1.5,0,2.2,1.2,2.2,3.7V40.6z'
                        />
                        <path
                          d='M189.3,38.9c0,1.9,0,3-0.1,3.3c-0.3,1.3-1,2-2.3,2c-1.7,0-2.6-1.3-2.6-3.8v-4.8h10.2V30c0-2.9-0.5-5-1.5-6.4
c-1.5-1.9-3.5-2.8-6-2.8c-2.6,0-4.6,0.9-6.1,2.8c-1.1,1.4-1.6,3.5-1.6,6.4v9.5c0,2.9,0.6,5,1.7,6.4c1.5,1.9,3.5,2.8,6.2,2.8
c2.7,0,4.8-1,6.2-2.9c0.7-1,1.1-2,1.2-3c0.1-0.3,0.1-1.4,0.1-3.2v-0.7H189.3z M184.3,29c0-2.5,0.9-3.7,2.6-3.7
c1.7,0,2.6,1.2,2.6,3.7v2.5h-5.1V29z'
                        />
                      </g>
                    </svg>
                  </div>
                  <h3>Gỗ An Cường</h3>
                </a>
              </div>
            </div>
            <div className='list-youtube-home'>
              <div className='box-youtube-home ani-item'>
                <a href='https://www.youtube.com/watch?v=HzgTK4nIV1E' target='_blank' rel='nofollow noopener'>
                  <button className='button-video' aria-label='video' />
                  <div className='pic-img'>
                    <img
                      src='https://www.ancuong.com/pictures/catalog/youtube-thumbnail/ancuong-kevatlieu.jpg'
                      alt='Khám Phá Kệ Góc Vật Liệu An Cường Mới Nhất'
                      loading='lazy'
                    />
                  </div>
                  <div className='title-pic'>
                    <h3>Khám Phá Kệ Góc Vật Liệu An Cường Mới Nhất</h3>
                  </div>
                </a>
              </div>
              <div className='box-youtube-home ani-item'>
                <a href='https://youtu.be/SMtmd08UqFw' target='_blank' rel='nofollow noopener'>
                  <button className='button-video' aria-label='video' />
                  <div className='pic-img'>
                    <img
                      src='https://www.ancuong.com/pictures/catalog/youtube-thumbnail/giaiphap-vatlieu.jpg'
                      alt='Giải Pháp Sử Dụng Vật Liệu Đúng Cách | Gỗ An Cường'
                      loading='lazy'
                    />
                  </div>
                  <div className='title-pic'>
                    <h3>Giải Pháp Sử Dụng Vật Liệu Đúng Cách | Gỗ An Cường</h3>
                  </div>
                </a>
              </div>
              <div className='box-youtube-home ani-item'>
                <a href='https://youtu.be/0K-j3YGS6h0' target='_blank' rel='nofollow noopener'>
                  <button className='button-video' aria-label='video' />
                  <div className='pic-img'>
                    <img
                      src='https://www.ancuong.com/pictures/catalog/youtube-thumbnail/penthouse-ecopark-250m2-truongphat.jpg'
                      alt='Mãn Nhãn Với Căn Penhouse 250m2 - Rộng Nhất Ecopark | Trường Phát Design'
                      loading='lazy'
                    />
                  </div>
                  <div className='title-pic'>
                    <h3>Mãn Nhãn Với Căn Penhouse 250m2 - Rộng Nhất Ecopark | Trường Phát Design</h3>
                  </div>
                </a>
              </div>
              <div className='box-youtube-home ani-item'>
                <a href='https://youtu.be/yv9DjTvBzGg' target='_blank' rel='nofollow noopener'>
                  <button className='button-video' aria-label='video' />
                  <div className='pic-img'>
                    <img
                      src='https://www.ancuong.com/pictures/catalog/youtube-thumbnail/An-Cuong-Tu-Gioi-Thieu-thumb.jpg'
                      alt='An Cường Tự Giới Thiệu | An Cuong Introduce'
                      loading='lazy'
                    />
                  </div>
                  <div className='title-pic'>
                    <h3>An Cường Tự Giới Thiệu | An Cuong Introduce</h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <Footer /> */}
    </LayoutApp>
  )
}

export default Home

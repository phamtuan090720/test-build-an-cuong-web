import Slide from '@/components/slide'
import React from 'react'
import { styled } from 'styled-components'
const CatalogueItem = styled.div`
  position: relative;
  margin-right: unset;
  margin: 0 auto;
  width: 447.5px;
  .pdf {
    .button-download {
      width: 90%;
      height: 90%;
      margin: 5%;
      svg {
        width: 100%;
        height: 100%;
        margin: unset;
      }
    }
  }
`
const SlideStyled = styled(Slide)`
  /* .slick-track {
    display: flex;
    justify-content: center;
    gap: 5px;
    & > div {
      width: max-content !important;
    }
  } */
`

const Catalogue = () => {
  const onDownLoad = (link) => {
    let linkElement = document.createElement('a')
    linkElement.id = link
    linkElement.href = link
    linkElement.click()
  }

  const listItems = [
    <CatalogueItem>
      <div
        className='catalogue-top ani-item on-show'
        style={{
          backgroundImage: 'url("https://www.ancuong.com/pictures/catalog/catalogue/25-3-2022/mfc-25-3-2022.jpg")'
        }}
      >
        <div className='pdf'>
          <button
            onClick={() => {
              onDownLoad('https://www.ancuong.com/online-catalogue/Master%20MFC.pdf')
            }}
            className='button-download'
          >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
              <path
                fill='currentColor'
                d='M77.2,60.5c-1.8-3.3-9.9-5.4-17.1-5.9c-0.6-0.6-1.3-1.4-1.9-2.1c-6.1-6.9-8.6-17.2-9.5-22.5
c-0.1-1.2-0.2-2.1-0.3-2.8c-0.1-0.5-0.2-1.7-1.5-1.7c-0.4,0-0.7,0.2-1.1,0.4c-0.4,0.5-0.3,1.1-0.3,1.6c0.1,0.7,0.2,1.6,0.4,2.8
c0.5,5.4,0.7,15.9-3.4,24.1c-0.4,0.9-0.9,1.7-1.3,2.5c-7.9,2.2-14.3,6.4-15.1,9.7c-0.3,1.2,0,2.5,0.9,3.3c1,1.1,2.2,1.6,3.5,1.6
c3.7,0,8-4.2,12.7-12.3c2-0.5,4.2-1,6.1-1.2c0.7-0.1,2-0.2,2.8-0.3c2.1-0.3,4.6-0.4,7-0.4c5.8,6,10.3,9,13.9,9c1.9,0,3.4-1,4.4-2.6
C77.8,62.6,77.8,61.4,77.2,60.5 M30.4,68.7c-0.5,0-1.1-0.2-1.6-0.7c-0.2-0.2-0.2-0.4-0.2-0.6c0.5-1.7,4.5-4.7,10.5-6.9
C35.7,65.6,32.5,68.7,30.4,68.7 M51.5,54.9c-0.7,0.1-1.9,0.3-2.7,0.3c-1.4,0.1-2.7,0.3-4.1,0.6c0.1-0.1,0.1-0.2,0.2-0.3
c2-4.1,3.3-8.9,3.8-14.5c1.9,5.3,4.4,9.7,7.4,13.1c0.1,0.1,0.2,0.2,0.3,0.3C54.7,54.6,53,54.7,51.5,54.9 M74.9,62.3
c-0.4,0.9-1.1,1.2-2,1.2c-2.2,0-5.5-2-9.6-5.9c6.2,0.7,10.8,2.7,11.6,4.2C75,61.9,75,62.1,74.9,62.3'
              />
              <path
                fill='currentColor'
                d='M50,90c-22.1,0-40-17.9-40-40s17.9-40,40-40s40,17.9,40,40S72.1,90,50,90z M50,12.2c-20.8,0-37.8,17-37.8,37.9
c0,20.8,17,37.8,37.9,37.8c20.8,0,37.8-17,37.8-37.8C87.9,29.2,70.9,12.2,50,12.2z'
              />
            </svg>
          </button>
        </div>
        <img
          data-src='https://www.ancuong.com/pictures/catalog/catalogue/25-3-2022/mfc-25-3-2022.jpg'
          alt='MFC Master'
          loading='lazy'
          className='load-done'
          src='https://www.ancuong.com/pictures/catalog/catalogue/25-3-2022/mfc-25-3-2022.jpg'
          data-was-processed='true'
        />
      </div>
    </CatalogueItem>
    //     <CatalogueItem>
    //       <div
    //         className='catalogue-top ani-item on-show'
    //         style={{
    //           backgroundImage: 'url("https://www.ancuong.com/pictures/catalog/catalogue/25-3-2022/mfc-25-3-2022.jpg")'
    //         }}
    //       >
    //         <div className='pdf'>
    //           <button
    //             onClick={() => {
    //               onDownLoad('https://www.ancuong.com/online-catalogue/Master%20MFC.pdf')
    //             }}
    //             className='button-download'
    //           >
    //             <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
    //               <path
    //                 fill='currentColor'
    //                 d='M77.2,60.5c-1.8-3.3-9.9-5.4-17.1-5.9c-0.6-0.6-1.3-1.4-1.9-2.1c-6.1-6.9-8.6-17.2-9.5-22.5
    // c-0.1-1.2-0.2-2.1-0.3-2.8c-0.1-0.5-0.2-1.7-1.5-1.7c-0.4,0-0.7,0.2-1.1,0.4c-0.4,0.5-0.3,1.1-0.3,1.6c0.1,0.7,0.2,1.6,0.4,2.8
    // c0.5,5.4,0.7,15.9-3.4,24.1c-0.4,0.9-0.9,1.7-1.3,2.5c-7.9,2.2-14.3,6.4-15.1,9.7c-0.3,1.2,0,2.5,0.9,3.3c1,1.1,2.2,1.6,3.5,1.6
    // c3.7,0,8-4.2,12.7-12.3c2-0.5,4.2-1,6.1-1.2c0.7-0.1,2-0.2,2.8-0.3c2.1-0.3,4.6-0.4,7-0.4c5.8,6,10.3,9,13.9,9c1.9,0,3.4-1,4.4-2.6
    // C77.8,62.6,77.8,61.4,77.2,60.5 M30.4,68.7c-0.5,0-1.1-0.2-1.6-0.7c-0.2-0.2-0.2-0.4-0.2-0.6c0.5-1.7,4.5-4.7,10.5-6.9
    // C35.7,65.6,32.5,68.7,30.4,68.7 M51.5,54.9c-0.7,0.1-1.9,0.3-2.7,0.3c-1.4,0.1-2.7,0.3-4.1,0.6c0.1-0.1,0.1-0.2,0.2-0.3
    // c2-4.1,3.3-8.9,3.8-14.5c1.9,5.3,4.4,9.7,7.4,13.1c0.1,0.1,0.2,0.2,0.3,0.3C54.7,54.6,53,54.7,51.5,54.9 M74.9,62.3
    // c-0.4,0.9-1.1,1.2-2,1.2c-2.2,0-5.5-2-9.6-5.9c6.2,0.7,10.8,2.7,11.6,4.2C75,61.9,75,62.1,74.9,62.3'
    //               />
    //               <path
    //                 fill='currentColor'
    //                 d='M50,90c-22.1,0-40-17.9-40-40s17.9-40,40-40s40,17.9,40,40S72.1,90,50,90z M50,12.2c-20.8,0-37.8,17-37.8,37.9
    // c0,20.8,17,37.8,37.9,37.8c20.8,0,37.8-17,37.8-37.8C87.9,29.2,70.9,12.2,50,12.2z'
    //               />
    //             </svg>
    //           </button>
    //         </div>
    //         <img
    //           data-src='https://www.ancuong.com/pictures/catalog/catalogue/25-3-2022/mfc-25-3-2022.jpg'
    //           alt='MFC Master'
    //           loading='lazy'
    //           className='load-done'
    //           src='https://www.ancuong.com/pictures/catalog/catalogue/25-3-2022/mfc-25-3-2022.jpg'
    //           data-was-processed='true'
    //         />
    //       </div>
    //     </CatalogueItem>,
    //     <CatalogueItem>
    //       <div
    //         className='catalogue-top ani-item on-show'
    //         style={{
    //           backgroundImage: 'url("https://www.ancuong.com/pictures/catalog/catalogue/25-3-2022/mfc-25-3-2022.jpg")'
    //         }}
    //       >
    //         <div className='pdf'>
    //           <button
    //             onClick={() => {
    //               onDownLoad('https://www.ancuong.com/online-catalogue/Master%20MFC.pdf')
    //             }}
    //             className='button-download'
    //           >
    //             <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
    //               <path
    //                 fill='currentColor'
    //                 d='M77.2,60.5c-1.8-3.3-9.9-5.4-17.1-5.9c-0.6-0.6-1.3-1.4-1.9-2.1c-6.1-6.9-8.6-17.2-9.5-22.5
    // c-0.1-1.2-0.2-2.1-0.3-2.8c-0.1-0.5-0.2-1.7-1.5-1.7c-0.4,0-0.7,0.2-1.1,0.4c-0.4,0.5-0.3,1.1-0.3,1.6c0.1,0.7,0.2,1.6,0.4,2.8
    // c0.5,5.4,0.7,15.9-3.4,24.1c-0.4,0.9-0.9,1.7-1.3,2.5c-7.9,2.2-14.3,6.4-15.1,9.7c-0.3,1.2,0,2.5,0.9,3.3c1,1.1,2.2,1.6,3.5,1.6
    // c3.7,0,8-4.2,12.7-12.3c2-0.5,4.2-1,6.1-1.2c0.7-0.1,2-0.2,2.8-0.3c2.1-0.3,4.6-0.4,7-0.4c5.8,6,10.3,9,13.9,9c1.9,0,3.4-1,4.4-2.6
    // C77.8,62.6,77.8,61.4,77.2,60.5 M30.4,68.7c-0.5,0-1.1-0.2-1.6-0.7c-0.2-0.2-0.2-0.4-0.2-0.6c0.5-1.7,4.5-4.7,10.5-6.9
    // C35.7,65.6,32.5,68.7,30.4,68.7 M51.5,54.9c-0.7,0.1-1.9,0.3-2.7,0.3c-1.4,0.1-2.7,0.3-4.1,0.6c0.1-0.1,0.1-0.2,0.2-0.3
    // c2-4.1,3.3-8.9,3.8-14.5c1.9,5.3,4.4,9.7,7.4,13.1c0.1,0.1,0.2,0.2,0.3,0.3C54.7,54.6,53,54.7,51.5,54.9 M74.9,62.3
    // c-0.4,0.9-1.1,1.2-2,1.2c-2.2,0-5.5-2-9.6-5.9c6.2,0.7,10.8,2.7,11.6,4.2C75,61.9,75,62.1,74.9,62.3'
    //               />
    //               <path
    //                 fill='currentColor'
    //                 d='M50,90c-22.1,0-40-17.9-40-40s17.9-40,40-40s40,17.9,40,40S72.1,90,50,90z M50,12.2c-20.8,0-37.8,17-37.8,37.9
    // c0,20.8,17,37.8,37.9,37.8c20.8,0,37.8-17,37.8-37.8C87.9,29.2,70.9,12.2,50,12.2z'
    //               />
    //             </svg>
    //           </button>
    //         </div>
    //         <img
    //           data-src='https://www.ancuong.com/pictures/catalog/catalogue/25-3-2022/mfc-25-3-2022.jpg'
    //           alt='MFC Master'
    //           loading='lazy'
    //           className='load-done'
    //           src='https://www.ancuong.com/pictures/catalog/catalogue/25-3-2022/mfc-25-3-2022.jpg'
    //           data-was-processed='true'
    //         />
    //       </div>
    //     </CatalogueItem>,
    //     <CatalogueItem>
    //       <div
    //         className='catalogue-top ani-item on-show'
    //         style={{
    //           backgroundImage: 'url("https://www.ancuong.com/pictures/catalog/catalogue/25-3-2022/mfc-25-3-2022.jpg")'
    //         }}
    //       >
    //         <div className='pdf'>
    //           <button
    //             onClick={() => {
    //               onDownLoad('https://www.ancuong.com/online-catalogue/Master%20MFC.pdf')
    //             }}
    //             className='button-download'
    //           >
    //             <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
    //               <path
    //                 fill='currentColor'
    //                 d='M77.2,60.5c-1.8-3.3-9.9-5.4-17.1-5.9c-0.6-0.6-1.3-1.4-1.9-2.1c-6.1-6.9-8.6-17.2-9.5-22.5
    // c-0.1-1.2-0.2-2.1-0.3-2.8c-0.1-0.5-0.2-1.7-1.5-1.7c-0.4,0-0.7,0.2-1.1,0.4c-0.4,0.5-0.3,1.1-0.3,1.6c0.1,0.7,0.2,1.6,0.4,2.8
    // c0.5,5.4,0.7,15.9-3.4,24.1c-0.4,0.9-0.9,1.7-1.3,2.5c-7.9,2.2-14.3,6.4-15.1,9.7c-0.3,1.2,0,2.5,0.9,3.3c1,1.1,2.2,1.6,3.5,1.6
    // c3.7,0,8-4.2,12.7-12.3c2-0.5,4.2-1,6.1-1.2c0.7-0.1,2-0.2,2.8-0.3c2.1-0.3,4.6-0.4,7-0.4c5.8,6,10.3,9,13.9,9c1.9,0,3.4-1,4.4-2.6
    // C77.8,62.6,77.8,61.4,77.2,60.5 M30.4,68.7c-0.5,0-1.1-0.2-1.6-0.7c-0.2-0.2-0.2-0.4-0.2-0.6c0.5-1.7,4.5-4.7,10.5-6.9
    // C35.7,65.6,32.5,68.7,30.4,68.7 M51.5,54.9c-0.7,0.1-1.9,0.3-2.7,0.3c-1.4,0.1-2.7,0.3-4.1,0.6c0.1-0.1,0.1-0.2,0.2-0.3
    // c2-4.1,3.3-8.9,3.8-14.5c1.9,5.3,4.4,9.7,7.4,13.1c0.1,0.1,0.2,0.2,0.3,0.3C54.7,54.6,53,54.7,51.5,54.9 M74.9,62.3
    // c-0.4,0.9-1.1,1.2-2,1.2c-2.2,0-5.5-2-9.6-5.9c6.2,0.7,10.8,2.7,11.6,4.2C75,61.9,75,62.1,74.9,62.3'
    //               />
    //               <path
    //                 fill='currentColor'
    //                 d='M50,90c-22.1,0-40-17.9-40-40s17.9-40,40-40s40,17.9,40,40S72.1,90,50,90z M50,12.2c-20.8,0-37.8,17-37.8,37.9
    // c0,20.8,17,37.8,37.9,37.8c20.8,0,37.8-17,37.8-37.8C87.9,29.2,70.9,12.2,50,12.2z'
    //               />
    //             </svg>
    //           </button>
    //         </div>
    //         <img
    //           data-src='https://www.ancuong.com/pictures/catalog/catalogue/25-3-2022/mfc-25-3-2022.jpg'
    //           alt='MFC Master'
    //           loading='lazy'
    //           className='load-done'
    //           src='https://www.ancuong.com/pictures/catalog/catalogue/25-3-2022/mfc-25-3-2022.jpg'
    //           data-was-processed='true'
    //         />
    //       </div>
    //     </CatalogueItem>
  ]
  const count = 2
  return (
    <section className='content-page product-template'>
      <div className='load-product show' style={{ opacity: 1 }}>
        <div className='all-content-load'>
          <div className='load-title'>
            <h3>Melamine Phủ Trên Ván Dăm (MFC)</h3>
          </div>
          {/* <div className='online-catalogue color-grey-dark slide-slidebox slide-drag'>
            <div className='slide-wrapper-outer' style={{ height: 'auto' }}>
              <div
                className='slide-wrapper'
                style={{ transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: '453px' }}
              >
                <div className='slide-item active' style={{ width: '447.5px', marginRight: '5px' }}>
                  <div
                    className='catalogue-top ani-item on-show'
                    style={{
                      backgroundImage:
                        'url("https://www.ancuong.com/pictures/catalog/catalogue/25-3-2022/mfc-25-3-2022.jpg")'
                    }}
                  >
                    <div className='pdf'>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
                        <path
                          fill='currentColor'
                          d='M77.2,60.5c-1.8-3.3-9.9-5.4-17.1-5.9c-0.6-0.6-1.3-1.4-1.9-2.1c-6.1-6.9-8.6-17.2-9.5-22.5
c-0.1-1.2-0.2-2.1-0.3-2.8c-0.1-0.5-0.2-1.7-1.5-1.7c-0.4,0-0.7,0.2-1.1,0.4c-0.4,0.5-0.3,1.1-0.3,1.6c0.1,0.7,0.2,1.6,0.4,2.8
c0.5,5.4,0.7,15.9-3.4,24.1c-0.4,0.9-0.9,1.7-1.3,2.5c-7.9,2.2-14.3,6.4-15.1,9.7c-0.3,1.2,0,2.5,0.9,3.3c1,1.1,2.2,1.6,3.5,1.6
c3.7,0,8-4.2,12.7-12.3c2-0.5,4.2-1,6.1-1.2c0.7-0.1,2-0.2,2.8-0.3c2.1-0.3,4.6-0.4,7-0.4c5.8,6,10.3,9,13.9,9c1.9,0,3.4-1,4.4-2.6
C77.8,62.6,77.8,61.4,77.2,60.5 M30.4,68.7c-0.5,0-1.1-0.2-1.6-0.7c-0.2-0.2-0.2-0.4-0.2-0.6c0.5-1.7,4.5-4.7,10.5-6.9
C35.7,65.6,32.5,68.7,30.4,68.7 M51.5,54.9c-0.7,0.1-1.9,0.3-2.7,0.3c-1.4,0.1-2.7,0.3-4.1,0.6c0.1-0.1,0.1-0.2,0.2-0.3
c2-4.1,3.3-8.9,3.8-14.5c1.9,5.3,4.4,9.7,7.4,13.1c0.1,0.1,0.2,0.2,0.3,0.3C54.7,54.6,53,54.7,51.5,54.9 M74.9,62.3
c-0.4,0.9-1.1,1.2-2,1.2c-2.2,0-5.5-2-9.6-5.9c6.2,0.7,10.8,2.7,11.6,4.2C75,61.9,75,62.1,74.9,62.3'
                        />
                        <path
                          fill='currentColor'
                          d='M50,90c-22.1,0-40-17.9-40-40s17.9-40,40-40s40,17.9,40,40S72.1,90,50,90z M50,12.2c-20.8,0-37.8,17-37.8,37.9
c0,20.8,17,37.8,37.9,37.8c20.8,0,37.8-17,37.8-37.8C87.9,29.2,70.9,12.2,50,12.2z'
                        />
                      </svg>
                    </div>
                    <img
                      data-src='https://www.ancuong.com/pictures/catalog/catalogue/25-3-2022/mfc-25-3-2022.jpg'
                      alt='MFC Master'
                      loading='lazy'
                      className='load-done'
                      src='https://www.ancuong.com/pictures/catalog/catalogue/25-3-2022/mfc-25-3-2022.jpg'
                      data-was-processed='true'
                    />
                    <a className='pdf-download' href='https://www.ancuong.com/online-catalogue/Master MFC.pdf' />
                  </div>
                </div>
              </div>
            </div>
            <div className='slide-buttons disabled'>
              <div className='slide-prev' />
              <div className='slide-next' />
            </div>
            <div className='slide-pagination disabled'>
              <div className='slide-page active'>
                <span />
              </div>
            </div>
          </div> */}
          <div className='wrap-content' style={{ maxWidth: 900 }}>
            <SlideStyled listItems={listItems} slickConfig={{ slidesToShow: 1 }} />
          </div>
        </div>
      </div>
      <div className='product-details'>
        <button className='close' aria-label='close' />
      </div>
    </section>
  )
}

export default Catalogue

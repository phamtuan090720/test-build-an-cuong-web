import ShadowBox from '@/components/shadowBox'
import Slide from '@/components/slide'
import React from 'react'
import { styled } from 'styled-components'
const DotSlide = styled.div`
  width: 30px;
  height: 30px;
  color: white;
  border: 1px solid #ffffff80;
  border-radius: 50%;
  margin: 0 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 28px;
  background-color: #ffffff00;
  &:hover {
    background-color: #ffffff80;
    border: 1px solid #ffffff00;
    color: #58595b;
  }
`
const DotActiveSlide = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 0 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 28px;
  background-color: #ffffff80;
  border: 1px solid #ffffff00;
  color: #58595b;
`
const ContainerSlide = styled.div`
  ul {
    display: flex;
  }
  li {
    margin: 0 3px;
    width: 30px;
    height: 30px;
  }
`
const ShowRooms = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [showAlbum, setShowAlbum] = React.useState(false)
  const handleShowAlbum = (e) => {
    alert('hihi')
  }
  const listItems = [
    <div className='wrap-album-box'>
      <div
        className='album-box'
        style={{
          backgroundImage:
            'url("https://www.ancuong.com/pictures/catalog/about/he-thong-showroom/hcm-an-cuong-one-stop-shopping-center/31-5-2022/ancuong-279-31-5-2022-outdoor-1000x600.jpg")'
        }}
      >
        <h3>HCM ONE-STOP SHOPPING CENTER</h3>
        <button
          onClick={handleShowAlbum}
          className='view-album'
          data-href='https://www.ancuong.com/view-album-aboutus.html?id=138'
          aria-label='view-album'
        />
      </div>
    </div>,
    <div className='wrap-album-box'>
      <div
        className='album-box'
        style={{
          backgroundImage:
            'url("https://www.ancuong.com/pictures/catalog/about/he-thong-showroom/hcm-onestop-q2/Q2-day-25-2-2022-1000x600.jpg")'
        }}
      >
        <h3>HCM ONE-STOP SHOPPING CENTER (QUẬN 2)</h3>
        <button
          className='view-album'
          data-href='https://www.ancuong.com/view-album-aboutus.html?id=217'
          aria-label='view-album'
        />
      </div>
    </div>,
    <div className='wrap-album-box'>
      <div
        className='album-box'
        style={{
          backgroundImage:
            'url("https://www.ancuong.com/pictures/catalog/about/he-thong-showroom/hcm-onestop-q9/outdoor/17-8-2022/outdoor-28-7-2022-1366.jpg")'
        }}
      >
        <h3>AN CƯỜNG SHOW GALLERY AND DESIGN CENTER (QUẬN 9)</h3>
        <button
          className='view-album'
          data-href='https://www.ancuong.com/view-album-aboutus.html?id=219'
          aria-label='view-album'
        />
      </div>
    </div>,
    <div className='wrap-album-box'>
      <div
        className='album-box'
        style={{
          backgroundImage:
            'url("https://www.ancuong.com/pictures/catalog/about/he-thong-showroom/hcm-an-cuong-show-gallery-and-design-center/outdoor-3-6-2022/svh-outdoor-3-6-2022.jpg")'
        }}
      >
        <h3>AN CƯỜNG SHOW GALLERY AND DESIGN CENTER (SƯ VẠN HẠNH)</h3>
        <button
          className='view-album'
          data-href='https://www.ancuong.com/view-album-aboutus.html?id=139'
          aria-label='view-album'
        />
      </div>
    </div>,
    <div className='wrap-album-box'>
      <div
        className='album-box'
        style={{
          backgroundImage:
            'url("https://www.ancuong.com/pictures/catalog/about/he-thong-showroom/showroom-phu-my-hung/19-4-2022/q7-outdoor-19-4-2022-1000x600.jpg")'
        }}
      >
        <h3>AN CƯỜNG SHOW GALLERY AND DESIGN CENTER (QUẬN 7)</h3>
        <button
          className='view-album'
          data-href='https://www.ancuong.com/view-album-aboutus.html?id=196'
          aria-label='view-album'
        />
      </div>
    </div>,
    <div className='wrap-album-box'>
      <div
        className='album-box'
        style={{
          backgroundImage:
            'url("https://www.ancuong.com/pictures/catalog/about/he-thong-showroom/ha-noi-one-stop-shopping-center/outdoor-7-1366x911.jpg")'
        }}
      >
        <h3>HÀ NỘI ONE-STOP SHOPPING CENTER</h3>
        <button
          className='view-album'
          data-href='https://www.ancuong.com/view-album-aboutus.html?id=182'
          aria-label='view-album'
        />
      </div>
    </div>,
    <div className='wrap-album-box'>
      <div
        className='album-box'
        style={{
          backgroundImage:
            'url("https://www.ancuong.com/pictures/catalog/about/he-thong-showroom/ha-noi-show-gallery-and-design-center/20-03-2023/AC-Dich-Vong-Center.jpg")'
        }}
      >
        <h3>HÀ NỘI SHOW GALLERY AND DESIGN CENTER</h3>
        <button
          className='view-album'
          data-href='https://www.ancuong.com/view-album-aboutus.html?id=141'
          aria-label='view-album'
        />
      </div>
    </div>,
    <div className='wrap-album-box'>
      <div
        className='album-box'
        style={{
          backgroundImage:
            'url("https://www.ancuong.com/pictures/catalog/about/he-thong-showroom/da-nang-one-stop-shopping-center/13-6-2023/01.outdoor/1.jpg")'
        }}
      >
        <h3>ĐÀ NẴNG ONE-STOP SHOPPING CENTER</h3>
        <button
          className='view-album'
          data-href='https://www.ancuong.com/view-album-aboutus.html?id=142'
          aria-label='view-album'
        />
      </div>
    </div>,
    <div className='wrap-album-box'>
      <div
        className='album-box'
        style={{
          backgroundImage:
            'url("https://www.ancuong.com/pictures/catalog/about/he-thong-showroom/showroom-binhduong-201/outdoor-18-4-2023/01-1.jpg")'
        }}
      >
        <h3>AN CƯỜNG SHOW GALLERY &amp; DESIGN CENTER (BÌNH DƯƠNG)</h3>
        <button
          className='view-album'
          data-href='https://www.ancuong.com/view-album-aboutus.html?id=226'
          aria-label='view-album'
        />
      </div>
    </div>,
    <div className='wrap-album-box'>
      <div
        className='album-box'
        style={{
          backgroundImage:
            'url("https://www.ancuong.com/pictures/catalog/about/he-thong-showroom/dat-cuoc/06-04-2023/thumb.jpg")'
        }}
      >
        <h3>ĐẤT CUỐC SHOW GALLERY AND DESIGN CENTER</h3>
        <button
          className='view-album'
          data-href='https://www.ancuong.com/view-album-aboutus.html?id=211'
          aria-label='view-album'
        />
      </div>
    </div>,
    <div className='wrap-album-box'>
      <div
        className='album-box'
        style={{
          backgroundImage:
            'url("https://www.ancuong.com/pictures/catalog/about/he-thong-showroom/tan-uyen/21-4-2023/3E0A8727-HDR.jpg")'
        }}
      >
        <h3>
          TÂN UYÊN SHOW GALLERY &amp; DESIGN CENTER
          <br />
        </h3>
        <button
          className='view-album'
          data-href='https://www.ancuong.com/view-album-aboutus.html?id=214'
          aria-label='view-album'
        />
      </div>
    </div>,
    <div className='wrap-album-box'>
      <div
        className='album-box'
        style={{
          backgroundImage:
            'url("https://www.ancuong.com/pictures/catalog/about/he-thong-showroom/factory-outlet/1-12-2022/ancuong-xk-1-12-2022-1.JPG")'
        }}
      >
        <h3>AN CƯỜNG FACTORY OUTLET</h3>
        <button
          className='view-album'
          data-href='https://www.ancuong.com/view-album-aboutus.html?id=140'
          aria-label='view-album'
        />
      </div>
    </div>,
    <div className='wrap-album-box'>
      <div
        className='album-box'
        style={{
          backgroundImage:
            'url("https://www.ancuong.com/pictures/catalog/about/he-thong-showroom/show-depot-1/show-depot-thumbnail.jpg")'
        }}
      >
        <h3>AN CƯỜNG SHOW DEPOT 1</h3>
        <button
          className='view-album'
          data-href='https://www.ancuong.com/view-album-aboutus.html?id=194'
          aria-label='view-album'
        />
      </div>
    </div>,
    <div className='wrap-album-box'>
      <div
        className='album-box'
        style={{
          backgroundImage:
            'url("https://www.ancuong.com/pictures/catalog/about/he-thong-showroom/show-depot-2/29-5-2023/showdepot2-4.jpg")'
        }}
      >
        <h3>AN CƯỜNG SHOW DEPOT 2</h3>
        <button
          className='view-album'
          data-href='https://www.ancuong.com/view-album-aboutus.html?id=193'
          aria-label='view-album'
        />
      </div>
    </div>,
    <div className='wrap-album-box'>
      <div
        className='album-box'
        style={{
          backgroundImage:
            'url("https://www.ancuong.com/pictures/catalog/about/he-thong-showroom/tong-kho-1/26-10-2022/ancuong-tongkho1-16-10-2022-7.jpg")'
        }}
      >
        <h3>AN CƯỜNG TỔNG KHO 01</h3>
        <button
          className='view-album'
          data-href='https://www.ancuong.com/view-album-aboutus.html?id=216'
          aria-label='view-album'
        />
      </div>
    </div>,
    <div className='wrap-album-box'>
      <div
        className='album-box'
        style={{
          backgroundImage:
            'url("https://www.ancuong.com/pictures/catalog/about/he-thong-showroom/tong-kho-3/31-5-2023/tongkho3-2.jpg")'
        }}
      >
        <h3>AN CƯỜNG TỔNG KHO 03</h3>
        <button
          className='view-album'
          data-href='https://www.ancuong.com/view-album-aboutus.html?id=224'
          aria-label='view-album'
        />
      </div>
    </div>
  ]
  return (
    <section
      className='content-page set-post'
      data-href='https://www.ancuong.com/vi/gioi-thieu/he-thong-showroom.html'
      data-post='showroom'
      data-title='An Cuong wood working materials'
      data-description='An Cuong wood working materials'
      data-keyword='An Cuong wood working materials'
    >
      <h2 className='color-white ani-item'>
        <span className='word1'>
          <span className='char1'>
            <span className='char1'>H</span>
          </span>
          <span className='char2'>
            <span className='char1'>ệ</span>
          </span>
        </span>{' '}
        <span className='word2'>
          <span className='char1'>
            <span className='char1'>T</span>
          </span>
          <span className='char2'>
            <span className='char1'>h</span>
          </span>
          <span className='char3'>
            <span className='char1'>ố</span>
          </span>
          <span className='char4'>
            <span className='char1'>n</span>
          </span>
          <span className='char5'>
            <span className='char1'>g</span>
          </span>
        </span>{' '}
        <span className='word3'>
          <span className='char1'>
            <span className='char1'>S</span>
          </span>
          <span className='char2'>
            <span className='char1'>h</span>
          </span>
          <span className='char3'>
            <span className='char1'>o</span>
          </span>
          <span className='char4'>
            <span className='char1'>w</span>
          </span>
          <span className='char5'>
            <span className='char1'>r</span>
          </span>
          <span className='char6'>
            <span className='char1'>o</span>
          </span>
          <span className='char7'>
            <span className='char1'>o</span>
          </span>
          <span className='char8'>
            <span className='char1'>m</span>
          </span>
        </span>{' '}
      </h2>
      <div className='content-picture ani-item'>
        <div
          className=' color-grey ani-item '
          data-time={5000}
          style={{
            width: '90%',
            maxWidth: '900px',
            margin: '0 auto'
          }}
        >
          <ContainerSlide>
            <Slide
              listItems={listItems}
              onClick={() => {}}
              slickConfig={{
                beforeChange: (index) => {
                  setCurrentSlide(index)
                },
                afterChange: (index) => setCurrentSlide(index),
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
                    <ul style={{ margin: '0px', justifyContent: 'center' }}> {dots} </ul>
                  </div>
                ),
                customPaging: (i) =>
                  i === currentSlide ? <DotActiveSlide>{i + 1}</DotActiveSlide> : <DotSlide>{i + 1}</DotSlide>
              }}
            />
          </ContainerSlide>
        </div>
      </div>
    </section>
  )
}

export default ShowRooms

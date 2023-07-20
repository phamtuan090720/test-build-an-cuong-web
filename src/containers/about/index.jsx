import LayoutApp from '@/app/layout'
import React from 'react'
import Video from './components/video'
import Overview from './components/overview'
import BannerAbout from './components/banner'
import OrganizationalChart from './components/organizational-chart'
import Partner from './components/partner'
import Consulting from './components/consulting'
import Certification from './components/certification'

const AboutContainer = () => {
  return (
    <LayoutApp>
      <div className='container' id='about-page' style={{ opacity: 1 }}>
        <div className='outer-nav ani-item second'>
          <h2>An Cường</h2>
          <div className='sub-nav'>
            <ul>
              <li className='current'>
                <a
                  href='https://www.ancuong.com/vi/gioi-thieu/cong-ty.html'
                  data-name='overview'
                  data-title='An Cuong wood working materials'
                  data-description='Công ty Cổ phần Gỗ An Cường là nhà sản xuất cung cấp nguyên vật liệu trang trí nội thất và vật liệu décor hàng đầu tại Việt Nam và khu vực từ năm 1994. Chúng tôi hiện là nhà sản xuất nội thất và xuất khẩu cho nhiều thương hiệu nội thất nổi tiếng tại Nhật '
                  data-keyword='an cường, gỗ an cường, an cuong, melamine, mfc, laminate, laminate kingdom, acrylic, veneer, tấm lam trang trí, tấm lambri, ván lõi xanh, gỗ lõi xanh, gỗ công nghiệp, ván công nghiệp'
                >
                  Công Ty
                </a>
              </li>
              <li>
                <a
                  href='https://www.ancuong.com/vi/gioi-thieu/video-2.html'
                  data-name='video'
                  data-title='VIDEO'
                  data-description
                  data-keyword
                >
                  VIDEO
                </a>
              </li>
              <li>
                <a
                  href='https://www.ancuong.com/vi/gioi-thieu/he-thong-showroom.html'
                  data-name='showroom'
                  data-title='An Cuong wood working materials'
                  data-description='An Cuong wood working materials'
                  data-keyword='An Cuong wood working materials'
                >
                  Hệ Thống Showroom
                </a>
              </li>
              <li>
                <a
                  href='https://www.ancuong.com/vi/gioi-thieu/so-do-to-chuc.html'
                  data-name='chart'
                  data-title='An Cuong wood working materials'
                  data-description='An Cuong wood working materials'
                  data-keyword='An Cuong wood working materials'
                >
                  Sơ Đồ Tổ Chức
                </a>
              </li>
              <li>
                <a
                  href='https://www.ancuong.com/vi/gioi-thieu/doi-tac.html'
                  data-name='partner'
                  data-title='An Cuong wood working materials'
                  data-description='An Cuong wood working materials'
                  data-keyword='An Cuong wood working materials'
                >
                  Đối tác
                </a>
              </li>
              <li>
                <a
                  href='https://www.ancuong.com/vi/gioi-thieu/chung-nhan-chat-luong.html'
                  data-name='certification'
                  data-title='An Cuong wood working materials'
                  data-description='An Cuong wood working materials'
                  data-keyword='An Cuong wood working materials'
                >
                  Chứng nhận chất lượng &amp; giải thưởng
                </a>
              </li>
              <li>
                <a
                  href='https://www.ancuong.com/vi/gioi-thieu/chuyen-gia-tu-van.html'
                  data-name='consulting'
                  data-title='An Cuong wood working materials'
                  data-description='An Cuong wood working materials'
                  data-keyword='An Cuong wood working materials'
                >
                  Chuyên gia tư vấn
                </a>
              </li>
            </ul>
          </div>
          <div className='wheel-submit wheel-next'>
            <span />
            <span />
            <span />
          </div>
          <div className='wheel-submit wheel-prev'>
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className='title-page show' style={{ top: '583.5px' }}>
          <h1>
            <span className='line1'>
              <span className='char1 move'>
                <span className='char1'>G</span>
              </span>
              <span className='char2 move'>
                <span className='char1'>i</span>
              </span>
              <span className='char3 move'>
                <span className='char1'>ớ</span>
              </span>
              <span className='char4 move'>
                <span className='char1'>i</span>
              </span>
              <span className='char5 move'>
                <span className='char1'></span>
              </span>
              <span className='char6 move'>
                <span className='char1'>t</span>
              </span>
              <span className='char7 move'>
                <span className='char1'>h</span>
              </span>
              <span className='char8 move'>
                <span className='char1'>i</span>
              </span>
              <span className='char9 move'>
                <span className='char1'>ệ</span>
              </span>
              <span className='char10 move'>
                <span className='char1'>u</span>
              </span>
            </span>
          </h1>
        </div>
        <BannerAbout />
        <div className='outer-nav ani-item on-show'>
          <h2>An Cường</h2>
          <div className='sub-nav'>
            <ul>
              <li className='current'>
                <a
                  href='https://www.ancuong.com/vi/gioi-thieu/cong-ty.html'
                  data-name='overview'
                  data-title='An Cuong wood working materials'
                  data-description='Công ty Cổ phần Gỗ An Cường là nhà sản xuất cung cấp nguyên vật liệu trang trí nội thất và vật liệu décor hàng đầu tại Việt Nam và khu vực từ năm 1994. Chúng tôi hiện là nhà sản xuất nội thất và xuất khẩu cho nhiều thương hiệu nội thất nổi tiếng tại Nhật '
                  data-keyword='an cường, gỗ an cường, an cuong, melamine, mfc, laminate, laminate kingdom, acrylic, veneer, tấm lam trang trí, tấm lambri, ván lõi xanh, gỗ lõi xanh, gỗ công nghiệp, ván công nghiệp'
                >
                  Công Ty
                </a>
              </li>
              <li>
                <a href='/video' data-name='video' data-title='VIDEO' data-description data-keyword>
                  VIDEO
                </a>
              </li>
              <li>
                <a
                  href='/showroom'
                  data-name='showroom'
                  data-title='An Cuong wood working materials'
                  data-description='An Cuong wood working materials'
                  data-keyword='An Cuong wood working materials'
                >
                  Hệ Thống Showroom
                </a>
              </li>
              <li>
                <a
                  href='https://www.ancuong.com/vi/gioi-thieu/so-do-to-chuc.html'
                  data-name='chart'
                  data-title='An Cuong wood working materials'
                  data-description='An Cuong wood working materials'
                  data-keyword='An Cuong wood working materials'
                >
                  Sơ Đồ Tổ Chức
                </a>
              </li>
              <li>
                <a
                  href='https://www.ancuong.com/vi/gioi-thieu/doi-tac.html'
                  data-name='partner'
                  data-title='An Cuong wood working materials'
                  data-description='An Cuong wood working materials'
                  data-keyword='An Cuong wood working materials'
                >
                  Đối tác
                </a>
              </li>
              <li>
                <a
                  href='https://www.ancuong.com/vi/gioi-thieu/chung-nhan-chat-luong.html'
                  data-name='certification'
                  data-title='An Cuong wood working materials'
                  data-description='An Cuong wood working materials'
                  data-keyword='An Cuong wood working materials'
                >
                  Chứng nhận chất lượng &amp; giải thưởng
                </a>
              </li>
              <li>
                <a
                  href='https://www.ancuong.com/vi/gioi-thieu/chuyen-gia-tu-van.html'
                  data-name='consulting'
                  data-title='An Cuong wood working materials'
                  data-description='An Cuong wood working materials'
                  data-keyword='An Cuong wood working materials'
                >
                  Chuyên gia tư vấn
                </a>
              </li>
            </ul>
          </div>
          <div className='wheel-submit wheel-next'>
            <span />
            <span />
            <span />
          </div>
          <div className='wheel-submit wheel-prev'>
            <span />
            <span />
            <span />
          </div>
        </div>
        <Overview />
        <Video />
        {/* <section
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
            <div className='slide-showroom color-grey ani-item slide-slidebox slide-drag' data-time={5000}>
              <div className='slide-wrapper-outer autoheight' style={{ height: '493.594px' }}>
                <div
                  className='slide-wrapper'
                  style={{ transition: 'all 0s ease 0s', width: 15760, transform: 'translate3d(0px, 0px, 0px)' }}
                >
                  <div className='slide-item active center' style={{ width: 980, marginRight: 5 }}>
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
                          className='view-album'
                          data-href='https://www.ancuong.com/view-album-aboutus.html?id=138'
                          aria-label='view-album'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='slide-item' style={{ width: 980, marginRight: 5 }}>
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
                    </div>
                  </div>
                  <div className='slide-item' style={{ width: 980, marginRight: 5 }}>
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
                    </div>
                  </div>
                  <div className='slide-item' style={{ width: 980, marginRight: 5 }}>
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
                    </div>
                  </div>
                  <div className='slide-item' style={{ width: 980, marginRight: 5 }}>
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
                    </div>
                  </div>
                  <div className='slide-item' style={{ width: 980, marginRight: 5 }}>
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
                    </div>
                  </div>
                  <div className='slide-item' style={{ width: 980, marginRight: 5 }}>
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
                    </div>
                  </div>
                  <div className='slide-item' style={{ width: 980, marginRight: 5 }}>
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
                    </div>
                  </div>
                  <div className='slide-item' style={{ width: 980, marginRight: 5 }}>
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
                    </div>
                  </div>
                  <div className='slide-item' style={{ width: 980, marginRight: 5 }}>
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
                    </div>
                  </div>
                  <div className='slide-item' style={{ width: 980, marginRight: 5 }}>
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
                    </div>
                  </div>
                  <div className='slide-item' style={{ width: 980, marginRight: 5 }}>
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
                    </div>
                  </div>
                  <div className='slide-item' style={{ width: 980, marginRight: 5 }}>
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
                    </div>
                  </div>
                  <div className='slide-item' style={{ width: 980, marginRight: 5 }}>
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
                    </div>
                  </div>
                  <div className='slide-item' style={{ width: 980, marginRight: 5 }}>
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
                    </div>
                  </div>
                  <div className='slide-item' style={{ width: 980, marginRight: 5 }}>
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
                  </div>
                </div>
              </div>
              <div className='slide-buttons'>
                <div className='slide-prev' />
                <div className='slide-next' />
              </div>
              <div className='slide-pagination'>
                <div className='slide-page active'>
                  <span className />
                </div>
                <div className='slide-page'>
                  <span className />
                </div>
                <div className='slide-page'>
                  <span className />
                </div>
                <div className='slide-page'>
                  <span className />
                </div>
                <div className='slide-page'>
                  <span className />
                </div>
                <div className='slide-page'>
                  <span className />
                </div>
                <div className='slide-page'>
                  <span className />
                </div>
                <div className='slide-page'>
                  <span className />
                </div>
                <div className='slide-page'>
                  <span className />
                </div>
                <div className='slide-page'>
                  <span className />
                </div>
                <div className='slide-page'>
                  <span className />
                </div>
                <div className='slide-page'>
                  <span className />
                </div>
                <div className='slide-page'>
                  <span className />
                </div>
                <div className='slide-page'>
                  <span className />
                </div>
                <div className='slide-page'>
                  <span className />
                </div>
                <div className='slide-page'>
                  <span className />
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <OrganizationalChart />
        <Partner />
        <Certification />
        <Consulting />
      </div>
    </LayoutApp>
  )
}

export default AboutContainer

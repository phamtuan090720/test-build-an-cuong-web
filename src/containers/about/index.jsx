import LayoutApp from '@/app/layout'
import React from 'react'
import Video from './components/video'
import Overview from './components/overview'
import BannerAbout from './components/banner'
import OrganizationalChart from './components/organizational-chart'
import Partner from './components/partner'
import Consulting from './components/consulting'
import Certification from './components/certification'
import ShowRooms from './components/show-rooms'

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
        <ShowRooms />
        <OrganizationalChart />
        <Partner />
        <Certification />
        <Consulting />
      </div>
    </LayoutApp>
  )
}

export default AboutContainer

import Slide from '@/components/slide'
import React from 'react'

const Certification = () => {
  const listItems = [
    <div className='slide-item active' style={{ width: '393.333px', marginRight: 10 }}>
      <div className='award'>
        <button className='zoom' data-pic='/images/GREEN-LABEL-2022-2024-update.jpg' aria-label='zoom' />{' '}
        <img src='/images/GREEN-LABEL-2022-2024-update.jpg' alt='Green Label' />
        <div className='award-des'>
          <h3>Green Label</h3>
        </div>
      </div>
    </div>,
    <div className='slide-item active' style={{ width: '393.333px', marginRight: 10 }}>
      <div className='award'>
        <button className='zoom' data-pic='/images/SA8000-2014-CERTIFICATE-2021.jpg' aria-label='zoom' />{' '}
        <img src='/images/SA8000-2014-CERTIFICATE-2021.jpg' alt='CHỨNG NHẬN TRÁCH NHIỆM XÃ HỘI SA 8000:2014' />
        <div className='award-des'>
          <h3>CHỨNG NHẬN TRÁCH NHIỆM XÃ HỘI SA 8000:2014</h3>
        </div>
      </div>
    </div>,
    <div className='slide-item active' style={{ width: '393.333px', marginRight: 10 }}>
      <div className='award'>
        <button className='zoom' data-pic='/images/iso-9001-2015-update-2023.jpg' aria-label='zoom' />{' '}
        <img src='/images/iso-9001-2015-update-2023.jpg' alt='ISO 9001:2015' />
        <div className='award-des'>
          <h3>ISO 9001:2015</h3>
        </div>
      </div>
    </div>,
    <div className='slide-item' style={{ width: '393.333px', marginRight: 10 }}>
      <div className='award'>
        <button className='zoom' data-pic='/images/iso-14001-2014-update-2023.jpg' aria-label='zoom' />{' '}
        <img src='/images/iso-14001-2014-update-2023.jpg' alt='Chứng nhận môi trường ISO 14001-2015' />
        <div className='award-des'>
          <h3>Chứng nhận môi trường ISO 14001-2015</h3>
        </div>
      </div>
    </div>,
    <div className='slide-item' style={{ width: '393.333px', marginRight: 10 }}>
      <div className='award'>
        <button className='zoom' data-pic='/images/top10-vlxd-2023.jpg' aria-label='zoom' />{' '}
        <img src='/images/top10-vlxd-2023.jpg' alt='TOP 10 CÔNG TY VẬT LIỆU XÂY DỰNG UY TÍN 2023' />
        <div className='award-des'>
          <h3>TOP 10 CÔNG TY VẬT LIỆU XÂY DỰNG UY TÍN 2023</h3>
        </div>
      </div>
    </div>,
    <div className='slide-item' style={{ width: '393.333px', marginRight: 10 }}>
      <div className='award'>
        <button
          className='zoom'
          data-pic='https://www.ancuong.com/pictures/catalog/about/chung-nhan-chat-luong/top-50-the-best-2022.jpg'
          aria-label='zoom'
        />{' '}
        <img src='/images/top-50-the-best-2022.jpg' alt='TOP 50 DOANH NGHIỆP VIỆT NAM XUẤT SẮC' />
        <div className='award-des'>
          <h3>TOP 50 DOANH NGHIỆP VIỆT NAM XUẤT SẮC</h3>
        </div>
      </div>
    </div>,
    <div className='slide-item' style={{ width: '393.333px', marginRight: 10 }}>
      <div className='award'>
        <button
          className='zoom'
          data-pic='https://www.ancuong.com/pictures/catalog/about/chung-nhan-chat-luong/vietname-value-2022.jpg'
          aria-label='zoom'
        />{' '}
        <img src='/images/vietname-value-2022.jpg' alt='VIETNAM VALUE 2022' />
        <div className='award-des'>
          <h3>VIETNAM VALUE 2022</h3>
        </div>
      </div>
    </div>,
    <div className='slide-item' style={{ width: '393.333px', marginRight: 10 }}>
      <div className='award'>
        <button
          className='zoom'
          data-pic='https://www.ancuong.com/pictures/catalog/about/chung-nhan-chat-luong/VNR-500-2022.jpg'
          aria-label='zoom'
        />{' '}
        <img src='/images/VNR-500-2022.jpg' alt='500 DOANH NGHIỆP LỚN NHẤT VIỆT NAM' />
        <div className='award-des'>
          <h3>500 DOANH NGHIỆP LỚN NHẤT VIỆT NAM</h3>
        </div>
      </div>
    </div>,
    <div className='slide-item' style={{ width: '393.333px', marginRight: 10 }}>
      <div className='award'>
        <button className='zoom' data-pic='/images/14.-Sao-Vang-Dat-Viet-TV.jpg' aria-label='zoom' />{' '}
        <img src='/images/14.-Sao-Vang-Dat-Viet-TV.jpg' alt='SAO VÀNG ĐẤT VIỆT 2018 ' />
        <div className='award-des'>
          <h3>SAO VÀNG ĐẤT VIỆT 2018 </h3>
        </div>
      </div>
    </div>,
    <div className='slide-item' style={{ width: '393.333px', marginRight: 10 }}>
      <div className='award'>
        <button className='zoom' data-pic='/images/csi2022.jpg' aria-label='zoom' />{' '}
        <img src='/images/csi2022.jpg' alt='CSI  - TOP 100 DOANH NGHIỆP BỀN VỮNG 2022' />
        <div className='award-des'>
          <h3>CSI - TOP 100 DOANH NGHIỆP BỀN VỮNG 2022</h3>
        </div>
      </div>
    </div>,
    <div className='slide-item' style={{ width: '393.333px', marginRight: 10 }}>
      <div className='award'>
        <button className='zoom' data-pic='/images/TOP-10-THUONG-HIEU-MANH.jpg' aria-label='zoom' />{' '}
        <img src='/images/TOP-10-THUONG-HIEU-MANH.jpg' alt='TOP 10 NGÀNH BẤT ĐỘNG SẢN - XÂY DỰNG THƯƠNG HIỆU MẠNH' />
        <div className='award-des'>
          <h3>TOP 10 NGÀNH BẤT ĐỘNG SẢN - XÂY DỰNG THƯƠNG HIỆU MẠNH</h3>
        </div>
      </div>
    </div>,
    <div className='slide-item' style={{ width: '393.333px', marginRight: 10 }}>
      <div className='award'>
        <button className='zoom' data-pic='/images/HR-ASIA-AWARD-2022.jpg' aria-label='zoom' />{' '}
        <img src='/images/HR-ASIA-AWARD-2022.jpg' alt='HR AWARDS 2022' />
        <div className='award-des'>
          <h3>HR AWARDS 2022</h3>
        </div>
      </div>
    </div>,
    <div className='slide-item' style={{ width: '393.333px', marginRight: 10 }}>
      <div className='award'>
        <button className='zoom' data-pic='/images/TOP-50-CORPORATE-2022.jpg' aria-label='zoom' />{' '}
        <img src='/images/TOP-50-CORPORATE-2022.jpg' alt='TOP 50 DOANH NGHIỆP PHÁT TRIỂN BỀN VỮNG 2022' />
        <div className='award-des'>
          <h3>TOP 50 DOANH NGHIỆP PHÁT TRIỂN BỀN VỮNG 2022</h3>
        </div>
      </div>
    </div>,
    <div className='slide-item' style={{ width: '393.333px', marginRight: 10 }}>
      <div className='award'>
        <button className='zoom' data-pic='/images/Top10Thuonghieuxanh-2022.jpg' aria-label='zoom' />{' '}
        <img src='/images/Top10Thuonghieuxanh-2022.jpg' alt='TOP 10 THƯƠNG HIỆU XANH 2021 - 2022' />
        <div className='award-des'>
          <h3>TOP 10 THƯƠNG HIỆU XANH 2021 - 2022</h3>
        </div>
      </div>
    </div>,
    <div className='slide-item' style={{ width: '393.333px', marginRight: 10 }}>
      <div className='award'>
        <button className='zoom' data-pic='/images/CSR-SAIGON-TIME-2022.jpg' aria-label='zoom' />{' '}
        <img src='/images/CSR-SAIGON-TIME-2022.jpg' alt='Saigon Times CSR (Corporate Social Responsibility) 2022' />
        <div className='award-des'>
          <h3>Saigon Times CSR (Corporate Social Responsibility) 2022</h3>
        </div>
      </div>
    </div>
  ]
  const slickConfig = {
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <section
      className='content-page set-post'
      data-post='certification'
      data-href='https://www.ancuong.com/vi/gioi-thieu/chung-nhan-chat-luong.html'
      data-title='An Cuong wood working materials'
      data-description='An Cuong wood working materials'
      data-keyword='An Cuong wood working materials'
    >
      <h2 className='color-grey ani-item'>
        <span className='word1'>
          <span className='char1'>
            <span className='char1'>C</span>
          </span>
          <span className='char2'>
            <span className='char1'>h</span>
          </span>
          <span className='char3'>
            <span className='char1'>ứ</span>
          </span>
          <span className='char4'>
            <span className='char1'>n</span>
          </span>
          <span className='char5'>
            <span className='char1'>g</span>
          </span>
        </span>{' '}
        <span className='word2'>
          <span className='char1'>
            <span className='char1'>n</span>
          </span>
          <span className='char2'>
            <span className='char1'>h</span>
          </span>
          <span className='char3'>
            <span className='char1'>ậ</span>
          </span>
          <span className='char4'>
            <span className='char1'>n</span>
          </span>
        </span>{' '}
        <span className='word3'>
          <span className='char1'>
            <span className='char1'>c</span>
          </span>
          <span className='char2'>
            <span className='char1'>h</span>
          </span>
          <span className='char3'>
            <span className='char1'>ấ</span>
          </span>
          <span className='char4'>
            <span className='char1'>t</span>
          </span>
        </span>{' '}
        <span className='word4'>
          <span className='char1'>
            <span className='char1'>l</span>
          </span>
          <span className='char2'>
            <span className='char1'>ư</span>
          </span>
          <span className='char3'>
            <span className='char1'>ợ</span>
          </span>
          <span className='char4'>
            <span className='char1'>n</span>
          </span>
          <span className='char5'>
            <span className='char1'>g</span>
          </span>
        </span>{' '}
        <span className='word5'>
          <span className='char1'>
            <span className='char1'>&amp;</span>
          </span>
        </span>{' '}
        <span className='word6'>
          <span className='char1'>
            <span className='char1'>g</span>
          </span>
          <span className='char2'>
            <span className='char1'>i</span>
          </span>
          <span className='char3'>
            <span className='char1'>ả</span>
          </span>
          <span className='char4'>
            <span className='char1'>i</span>
          </span>
        </span>{' '}
        <span className='word7'>
          <span className='char1'>
            <span className='char1'>t</span>
          </span>
          <span className='char2'>
            <span className='char1'>h</span>
          </span>
          <span className='char3'>
            <span className='char1'>ư</span>
          </span>
          <span className='char4'>
            <span className='char1'>ở</span>
          </span>
          <span className='char5'>
            <span className='char1'>n</span>
          </span>
          <span className='char6'>
            <span className='char1'>g</span>
          </span>
        </span>{' '}
      </h2>
      <div className='wrap-content'>
        <Slide listItems={listItems} slickConfig={slickConfig} />
      </div>
    </section>
  )
}

export default Certification

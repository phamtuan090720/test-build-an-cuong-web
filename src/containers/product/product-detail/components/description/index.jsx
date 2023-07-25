import React, { useEffect, useRef } from 'react'

const Description = () => {
  return (
    <section className='content-page product-template'>
      <div className='load-product show' style={{ opacity: 1 }}>
        <div className='all-content-load'>
          <div className='load-title'>
            <h3>Melamine Phủ Trên Ván Dăm (MFC)</h3>
          </div>
          <div className='load-text ani-item on-show'>
            <p style={{ textAlign: 'justify' }}>
              MFC được viết tắt của Melamine Faced Chipboard, là loại ván gỗ dăm phủ nhựa Melamine. Ván MFC có ứng dụng
              vô cùng rộng rãi đặc biệt là trong lĩnh vực nội thất văn phòng, nhà ở, chung cư cao cấp, bệnh viện, trường
              học, nội thất trẻ em... Hiện nay trên thị trường 80% đồ gỗ nội thất được sử dụng ván MFC vì giá cả phù
              hợp, màu sắc phong phú, ứng dụng đa dạng và hiện đại.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Sản phẩm của An Cường đáp ứng được các tiêu chuẩn chất lượng Quốc Tế - International Quality (E1, E2, E0,
              Green Label, Super E0, EPA, JIS,…). Bên cạnh đó, 100% ván MFC của An Cường đạt chất lượng theo tiêu chuẩn
              Quốc Tế.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Hiện nay, công ty An Cường có sẵn 300 màu Melamine từ các màu trơn như đen, trắng, xám nhạt, xám chì… cho
              đến tất cả các màu vân gỗ như Oak (sồi), Ash (tần bì), Maple (gỗ thích), Beech (giẻ gai), Acacia (tràm),
              Teak (giả tị), Walnut (óc chó), Campho (cẩm), Cherry (anh đào), Gõ đỏ, Nu vàng, Nu đỏ, từ hiện đại đến giả
              cổ... tất cả đều giống như gỗ thật.
            </p>
            <p style={{ textAlign: 'justify' }}>• Kích thước và độ dày ván MFC tiêu chuẩn:</p>
            <p style={{ textAlign: 'justify' }}>1.220 x 2.440 x (9 - 25)mm</p>
            <p style={{ textAlign: 'justify' }}>1.830 x 2.440 x (12/18/25)mm</p>
            <p style={{ textAlign: 'justify' }}>• Loại vượt khổ:</p>
            <p style={{ textAlign: 'justify' }}>
              Bên cạnh ván MFC chuẩn, An Cường còn cung cấp các loại ván MFC vượt khổ, giúp đa dạng hóa các ý tưởng
              thiết kế cần kích thước lớn như sau:
            </p>
            <p style={{ textAlign: 'justify' }}>1.220 x 2.745 x (18/25)mm</p>
            <p style={{ textAlign: 'justify' }}>• Loại chống ẩm:</p>
            <p style={{ textAlign: 'justify' }}>
              Bên cạnh đó An Cường cung cấp MFC chống ẩm lõi xanh tương tự màu như MFC loại chuẩn.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Với đặc tính chống ẩm, MFC chống ẩm được khuyến cáo nên sử dụng cho khu vực ẩm ướt như bếp, khu vệ sinh (
              tủ bếp, tủ vệ sinh, vách toilet, vách ngăn vệ sinh), phòng thí nghiệm, bệnh viện, trường học,v.v.
            </p>
          </div>
          <div className='print ani-item on-show'>
            <div className='print-box'>
              <button className='save-but' aria-label='save'>
                Lưu trang
              </button>{' '}
              <button className='print-but' aria-label='print'>
                In trang
              </button>{' '}
              <span
                onMouseOver={(e) => {
                  e.currentTarget.children[0].classList.add('active')
                }}
                onMouseOut={(e) => {
                  e.currentTarget.children[0].classList.remove('active')
                }}
                style={{ position: 'relative' }}
              >
                <button className='share-but' aria-label='share'>
                  Chia sẻ
                </button>
                <div className='share-item'>
                  <ul>
                    <li>
                      <a
                        className='item-facebook'
                        href='http://www.facebook.com/sharer.php?u=https://www.ancuong.com/vi/san-pham/san-pham-chinh/van-mfc--cac-loai-van-phu-melamine/melamine-phu-tren-van-dam-mfc.html'
                        target='_blank'
                        rel='nofollow noopener'
                      />
                    </li>
                    <li>
                      <a
                        className='item-linkedin'
                        href='https://www.linkedin.com/shareArticle?mini=true&url=https://www.ancuong.com/vi/san-pham/san-pham-chinh/van-mfc--cac-loai-van-phu-melamine/melamine-phu-tren-van-dam-mfc.html&title=Melamine%20Ph%E1%BB%A7%20Tr%C3%AAn%20V%C3%A1n%20D%C4%83m%20(MFC)&summary='
                        target='_blank'
                        rel='nofollow noopener'
                      />
                    </li>
                  </ul>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='product-details'>
        <button className='close' aria-label='close' />
      </div>
    </section>
  )
}

export default Description

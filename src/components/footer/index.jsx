import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="apps-link ani-item">
                <a className="apps apps-catalogue" href="https://apps.apple.com/app/id1445509636?fbclid=IwAR2sckTaJj9la8q1XSvwTsaus-NP0lQxo-xrIGICmz8Otmq-jO8F6WQi_P4" data-hrefgp="https://play.google.com/store/apps/details?id=com.ancuong.accatalogue" target="_blank" rel="nofollow noopener" aria-label="go-app" />
                <a className="apps ios" href="https://apps.apple.com/vn/app/ac-catalogue/id1445509636" target="_blank" rel="nofollow noopener" aria-label="goapp" />
                <a className="apps android" href="https://play.google.com/store/apps/details?id=com.ancuong.accatalogue" target="_blank" rel="nofollow noopener" aria-label="goapp" />
            </div>
            <div className="social ani-item">
                <ul>
                    <li>
                        <a className="zalo" href="http://zalo.me/1726318311174515141?src=qr" target="_blank" rel="nofollow noopener">zalo</a>
                    </li>
                    <li>
                        <a className="facebook" href="https://www.facebook.com/ancuongcompany/" target="_blank" rel="nofollow noopener">facebook</a>
                    </li>
                    <li>
                        <a className="youtube" href="https://www.youtube.com/@GoAnCuongOfficial" target="_blank" rel="nofollow noopener">youtube</a>
                    </li>
                    <li>
                        <a className="intergram" href="https://www.instagram.com/ancuongcompany/" target="_blank" rel="nofollow noopener">intergram</a>
                    </li>
                    <li>
                        <a className="pinterest" href="https://www.pinterest.com/goancuong" target="_blank" rel="nofollow noopener">pinterest</a>
                    </li>
                    <li>
                        <a className="linkedin" href="https://www.linkedin.com/company/an-cuong-group/" target="_blank" rel="nofollow noopener">linkedin</a>
                    </li>
                </ul>
            </div>
            <div className="copyright ani-item">
                © 2023 <strong>An Cuong wood working materials.</strong>
                <span>All Rights Reserved.</span>
                <a href="https://www.btq.vn" target="_blank" rel="nofollow noopener">Developed by 3graphic</a>
            </div>
            <div className="license ani-item">
                <div className="wrap-license">
                    <a href="http://online.gov.vn/Home/WebDetails/86463" rel="nofollow noopener" target="_blank">
                        <img src="https://www.ancuong.com/pictures/catalog/footer/license.png" alt="Bộ Công Thương" loading="lazy" />
                    </a>
                </div>
            </div>
        </footer>

    )
}

export default Footer
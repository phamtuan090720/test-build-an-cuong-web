import Head from 'next/head'
import React from 'react'
import dynamic from 'next/dynamic'
import Loading from '@/components/loading'
export default function ProductDetail() {
  const ProductDetailContainer = dynamic(
    () => {
      return import('@/containers/product/product-detail')
    },
    {
      loading: () => <Loading className='loading-page' />,
      ssr: false
    }
  )
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='Content-Language' content='vi' />
        <meta name='google' content='notranslate' />
        <meta name='language' content='vi_VN' />
        <meta name='robots' content='index, follow' />
        <meta name='author' content='An Cuong wood working materials' />
        <meta name='viewport' content='width=device-width,initial-scale=1,shrink-to-fit=no' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='theme-color' content='#5f676c' />
        <title id='hdtitle'>An Cuong wood working materials</title>
        <meta name='description' content='An Cuong wood working materials' />
        <meta name='keywords' content='An Cuong wood working materials' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta httpEquiv='cleartype' content='on' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
        <meta name='apple-mobile-web-app-title' content='An Cuong wood working materials' />
        <meta property='og:title' content='An Cuong wood working materials' />
        <meta property='og:description' content='An Cuong wood working materials' />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='An Cuong wood working materials' />
        <meta
          property='og:image'
          content='https://www.ancuong.com/catalog/view/theme/default/images/social-share.jpg'
        />
        <meta property='og:locale' content='vi_VN' />
        <link rel='icon' href='https://www.ancuong.com/catalog/view/theme/default/images/favicon.png' />
        <link
          rel='icon'
          sizes='512x512'
          href='https://www.ancuong.com/catalog/view/theme/default/images/icon-512.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='https://www.ancuong.com/catalog/view/theme/default/images/apple-touch-icon.png'
        />
        {/* <link rel="manifest" href="https://www.ancuong.com/app.manifest" /> */}
        <link rel='alternate' href='https://www.ancuong.com/' hrefLang='vi-vn' />
        <link rel='alternate' href='https://www.ancuong.com/' hrefLang='en-vn' />
        <link href='https://www.ancuong.com/' rel='canonical' />
        <meta property='og:url' content='https://www.ancuong.com/' />
        <meta
          property='og:image'
          content='https://www.ancuong.com/catalog/view/theme/default/images/social-share.jpg'
        />
        <meta name='p:domain_verify' content='0f18f8a9175b06cff1a2c82533ef204b' />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TSGPVR7');`
          }}
        />
        {/* End Google Tag Manager */}

        {/* Google Tag Manager (Second Instance) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T8CPLXR');`
          }}
        />
        {/* End Google Tag Manager (Second Instance) */}

        {/* Global site tag (gtag.js) - Google Analytics */}
        <script async src='https://www.googletagmanager.com/gtag/js?id=G-PB8HC5C683' />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-PB8HC5C683');`
          }}
        />
        {/* End Google Analytics */}

        {/* Event snippet for Lu?t xem trang Ac conversion page */}
        <script
          dangerouslySetInnerHTML={{
            __html: `gtag('event', 'conversion', {'send_to': 'AW-624480095/s7shCJWRyL8CEN-e46kC'});`
          }}
        />
        {/* End Event snippet for Lu?t xem trang Ac conversion page */}
      </Head>
      <main>
        <ProductDetailContainer />
      </main>
    </>
  )
}

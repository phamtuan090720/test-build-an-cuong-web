import loadScript from '@/utils/loadScript'
import { useEffect } from 'react'
import '../styles/index.css'
import Script from 'next/script'
export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (window !== undefined) {
      loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js', () => {
        if (!window?.jQuery) {
          loadScript('/js/jquery.js', () => {
            loadScript('/js/app.js', () => {
              console.log('jQuery has been loaded.')
            })
            loadScript('/js/validate.js', () => {
              console.log('jQuery has been loaded.')
            })
          })
        } else {
          loadScript('/js/app.js', () => {
            console.log('jQuery has been loaded.')
          })
          loadScript('/js/validate.js', () => {
            console.log('jQuery has been loaded.')
          })
        }
      })
    }
  }, [])

  return (
    <>
      <Component {...pageProps} />
      {/* <Script src='https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js' /> */}
    </>
  )
}

import Link from 'next/link'
import React, { useEffect, useRef } from 'react'

const Header = () => {
  const socialFacilitiesRef = useRef(null)
  useEffect(() => {
    setTimeout(() => {
      if (socialFacilitiesRef.current) {
        if (!socialFacilitiesRef.current.classList.contains('hide')) {
          socialFacilitiesRef.current.classList.add('hide')
        }
        if (!socialFacilitiesRef.current.classList.contains('show')) {
          socialFacilitiesRef.current.classList.add('show')
        }
      }
    }, 500)
  }, [])
  return (
    <header className='header'>
      <div className='wrap-header'>
        <div className='logo'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 234 60'>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n                    .st0 {\n                        fill: #60676d\n                    }\n                '
              }}
            />
            <path
              className='st0'
              d='M82.5 30.8v.8h-9.7v-.8c.9 0 1.6-.1 1.9-.3.3-.2.5-.4.5-.9 0-.4-.2-1-.5-2-.2-.3-.4-1.1-.8-2.1h-6.8c-.4 1-.7 1.8-.9 2.6-.3.7-.3 1.2-.3 1.3 0 .4.2.8.5.9.3.3 1 .3 1.9.3v.8h-6v-.8c.8-.1 1.3-.4 1.8-1 .3-.3.7-1.2 1.2-2.5L72 10.7h.8l6.7 15.7c.8 1.7 1.3 2.8 1.6 3.3.3.8.9 1 1.4 1.1zm-15-6.4h5.9l-3-7.3-2.9 7.3zm16.7 7.2v-.8c1-.1 1.7-.3 2-.5.4-.3.7-1 .7-1.8V14.2c-.5-.7-1-1.2-1.4-1.6-.4-.4-.8-.6-1.1-.6v-.8h6.3L101.1 24l.1-9c0-1-.2-1.8-.5-2.2-.4-.6-1.2-.8-2.3-.8v-.7h6.4v.8c-1 .2-1.7.3-1.9.7s-.4.9-.4 1.7v17.7h-.8L88.3 15.9l-.1 12c0 1.1.2 1.8.6 2.2.4.4 1.2.7 2.3.8v.8c-.1-.1-6.9-.1-6.9-.1zm48.3-4.7l.9.8c-1.3 1.4-2.4 2.5-3.6 3.2-1.4.8-3 1.3-4.8 1.3-3.3 0-6-1.1-7.9-3.2-1.8-1.9-2.8-4.4-2.8-7.4 0-3.1 1-5.6 2.9-7.7 2-2.1 4.5-3.1 7.6-3.1.9 0 1.8.2 2.8.4 1 .3 2 .7 2.9 1 .4 0 .7-.2.9-.4.1-.2.3-.4.5-.9h.8V18h-.7c-.6-1.6-1.4-2.9-2.6-4-1.3-1.3-2.8-2.1-4.3-2.1-2 0-3.5 1-4.4 2.9-.8 1.6-1.2 3.8-1.2 6.7 0 1.3.1 2.3.3 3.3.3 1.3.6 2.4 1.1 3.3.4.7 1 1.3 1.8 1.8.9.6 1.8.8 2.8.8 1.3 0 2.4-.3 3.5-.8 1-.6 2.2-1.6 3.5-3zm21.1-15.3c.1 0 .2-.1.3-.1s.2-.1.3-.3l.4-.4c-.4-.2-.8-.5-1.1-.8-.3-.4-.4-.8-.4-1.3 0-.7.3-1.2.7-1.7.4-.4 1-.7 1.6-.7s1.1.3 1.6.7c.4.4.7 1 .7 1.7 0 .2-.1.4-.2.8-.1.3-.3.6-.3.8-.2.3-.3.4-.5.7-.3.3-.6.5-.9.7-.4.3-.8.4-1.1.7s-.8.4-1.1.5v11.3c0 1.1-.1 2.1-.3 3-.3 1.2-.8 2.1-1.3 2.8-.7.8-1.6 1.3-2.8 1.7-1 .3-2 .5-3.1.5-1 0-1.9-.1-2.8-.3-1.3-.3-2.4-.8-3.3-1.6-.8-.7-1.3-1.3-1.5-1.9-.4-.8-.6-2-.6-3.5V15c0-1.2-.2-1.8-.6-2.3-.3-.3-.9-.4-1.8-.5v-.8h10.1v.8c-1.1 0-1.8.2-2.2.4-.4.3-.7 1.1-.7 2.3v10c0 2.1.3 3.5 1.1 4.4.7.9 1.8 1.4 3.3 1.4 2.3 0 3.8-.8 4.7-2.5.4-.9.7-2.3.7-3.9v-9.1c0-1.1-.2-1.8-.5-2.2-.4-.5-1.3-.8-2.4-.8v-.8h4.3l-.3.2zm19.4 1.2c.3-.1.5-.2.7-.2.4-.2.7-.3.8-.3l.4-.4c-.4-.2-.8-.5-1.1-.8-.3-.4-.4-.8-.4-1.3 0-.7.3-1.2.7-1.7.4-.4 1-.7 1.6-.7s1.1.3 1.6.7c.4.4.7 1 .7 1.7 0 .2-.1.4-.2.8-.1.3-.3.6-.3.8-.2.3-.3.4-.5.7-.3.3-.5.4-.8.7-.3.2-.6.3-.9.5-.2.1-.6.3-1.4.6.9.9 1.7 2.1 2.3 3.4.6 1.3.8 2.8.8 4.4 0 3.1-.9 5.7-2.8 7.7s-4.2 3-7 3-5.2-1-7-3-2.8-4.5-2.8-7.7.9-5.8 2.8-7.8c1.8-1.9 4.1-2.8 6.9-2.8 1.1 0 2.1.2 3.1.5 1 0 2 .5 2.8 1.2zm-5.9-.9c-1.8 0-3 1.1-3.9 3.2-.7 1.7-1 3.8-1 6.4 0 3.3.4 5.6 1.3 7.2s2.1 2.4 3.7 2.4 2.8-.8 3.6-2.4 1.3-4 1.3-7.2c0-2.7-.3-4.8-.9-6.4-1-2.1-2.3-3.2-4.1-3.2z'
            />
            <path
              className='st0'
              d='M169.7 9.5H168l-4.3-2.6c-.4-.3-.7-.5-.9-.8s-.3-.5-.3-.8c0-.4.2-.8.4-.9.3-.3.7-.3 1.1-.3.3 0 .6.1.8.3.2.1.4.3.7.6l4.2 4.5zm10 22.1v-.8c1-.1 1.7-.3 2-.5.4-.3.7-1 .7-1.8V14.2c-.5-.7-1-1.2-1.4-1.6-.4-.4-.8-.6-1.1-.6v-.8h6.3L196.6 24l.1-9c0-1-.2-1.8-.5-2.2-.4-.6-1.2-.8-2.3-.8v-.7h6.4v.8c-1 .2-1.7.3-1.9.7-.3.3-.4.9-.4 1.7v17.7h-.8L183.8 16l-.1 12c0 1.1.2 1.8.6 2.2s1.2.7 2.3.8v.8c-.1-.2-6.9-.2-6.9-.2zm43.6-8.7v.8c-1 .1-1.7.3-2 .5-.4.3-.6 1.1-.6 2.3v3.8c-.8.5-1.9.9-3.5 1.3-1.7.4-3.2.6-4.5.6-3.5 0-6.3-1.1-8.2-3.3-1.8-1.9-2.6-4.4-2.6-7.2 0-3 .9-5.5 2.8-7.6 2-2.1 4.6-3.2 7.7-3.2.9 0 1.8.2 2.8.4 1 .3 2 .7 2.9 1 .4 0 .7-.2.9-.4.1-.2.3-.4.5-.9h.8v7h-.8c-.6-1.6-1.4-2.9-2.6-4-1.3-1.3-2.8-2.1-4.3-2.1-2 0-3.5 1-4.4 2.9-.8 1.6-1.2 3.8-1.2 6.8 0 3.1.5 5.4 1.5 7.1s2.4 2.5 4.3 2.5c1.3 0 2.1-.2 2.5-.6.4-.3.6-.8.6-1.6v-3.1c0-.9-.3-1.5-.7-1.8s-1.3-.3-2.4-.3V23h10.4v-.1h.1zM64.8 51.1l-2.7-10h1.3l1.5 6.6c.2.7.3 1.3.4 2.1.3-1.1.4-1.7.4-1.8l1.9-6.8h1.6l1.4 5.1c.3 1.3.6 2.4.8 3.6.2-.7.3-1.3.5-2.2l1.6-6.4H75l-2.8 10H71l-2.1-7.7c-.2-.7-.3-1-.3-1.2-.1.5-.2.8-.3 1.2l-2.2 7.7h-1.3v-.2zm10.6-3.6c0-1.3.3-2.3 1.1-3 .7-.5 1.4-.8 2.3-.8 1 0 1.8.3 2.4 1 .7.7.9 1.6.9 2.8 0 .9-.2 1.7-.4 2.2-.3.5-.7.9-1.3 1.3-.5.3-1.1.4-1.8.4-1 0-1.8-.3-2.5-1-.4-.8-.7-1.8-.7-2.9zm1.2 0c0 .9.2 1.7.6 2.1.4.5.9.7 1.5.7s1.1-.3 1.5-.7c.4-.5.6-1.2.6-2.1s-.2-1.6-.6-2c-.4-.5-.9-.7-1.5-.7s-1.2.3-1.5.7c-.4.3-.6 1-.6 2zm6.6 0c0-1.3.3-2.3 1.1-3 .7-.5 1.4-.8 2.3-.8 1 0 1.8.3 2.4 1 .7.7.9 1.6.9 2.8 0 .9-.2 1.7-.4 2.2-.3.5-.7.9-1.3 1.3-.5.3-1.1.4-1.8.4-1 0-1.8-.3-2.5-1-.4-.8-.7-1.8-.7-2.9zm1.2 0c0 .9.2 1.7.6 2.1.4.5.9.7 1.5.7s1.1-.3 1.5-.7c.4-.5.6-1.2.6-2.1s-.2-1.6-.6-2c-.4-.5-.9-.7-1.5-.7s-1.2.2-1.5.6c-.3.4-.6 1.1-.6 2.1zm11.8 3.6v-.9c-.5.8-1.2 1.1-2 1.1-.6 0-1.1-.2-1.6-.5s-.8-.8-1.2-1.3c-.3-.6-.4-1.3-.4-2 0-.8.1-1.4.3-2 .3-.6.6-1.1 1.1-1.3.5-.3 1-.5 1.6-.5.4 0 .8.1 1.2.3.3.2.6.4.8.8v-3.6h1.3v10l-1.1-.1zm-3.9-3.6c0 .9.2 1.6.6 2.1s.8.7 1.4.7c.5 0 1-.3 1.3-.7.4-.4.6-1.1.6-2 0-1-.2-1.8-.6-2.2-.4-.5-.8-.7-1.4-.7s-1 .3-1.3.7c-.5.4-.6 1.1-.6 2.1zm10.4.5v-1.3h3.8V48h-3.8zm11 3.1L111 41h1.3l1.5 6.6c.2.7.3 1.3.4 2.1.3-1.1.4-1.7.4-1.8l1.9-6.8h1.6l1.4 5.1c.3 1.3.6 2.4.8 3.6.2-.7.3-1.3.5-2.2l1.6-6.4h1.3l-2.8 10h-1.3l-2.1-7.7c-.2-.7-.3-1-.3-1.2-.1.5-.2.8-.3 1.2l-2.2 7.7h-1.2v-.1h.2zm10.6-3.6c0-1.3.3-2.3 1.1-3 .7-.5 1.4-.8 2.3-.8 1 0 1.8.3 2.4 1 .7.7.9 1.6.9 2.8 0 .9-.2 1.7-.4 2.2-.3.5-.7.9-1.3 1.3-.5.3-1.1.4-1.8.4-1 0-1.8-.3-2.5-1-.4-.8-.7-1.8-.7-2.9zm1.2 0c0 .9.2 1.7.6 2.1.4.5.9.7 1.5.7s1.1-.3 1.5-.7c.4-.5.6-1.2.6-2.1s-.2-1.6-.6-2c-.4-.5-.9-.7-1.5-.7s-1.2.3-1.5.7c-.3.3-.6 1-.6 2zm7 3.6v-7.3h1.1v1.1c.3-.5.6-.8.8-1 .3-.2.5-.3.8-.3.4 0 .8.2 1.3.4l-.4 1.2c-.3-.2-.6-.3-.9-.3-.3 0-.5.1-.8.3s-.3.4-.5.7c-.2.4-.2.9-.2 1.4v3.8h-1.2zm4.7 0V41h1.3v5.8l2.9-2.9h1.6l-2.8 2.6 3.1 4.6h-1.5l-2.4-3.8-.8.8V51h-1.4v.1zm7-8.7V41h1.3v1.4h-1.3zm0 8.7v-7.3h1.3v7.3h-1.3zm3.2 0v-7.3h1.1v1c.5-.8 1.3-1.2 2.3-1.2.4 0 .8.1 1.3.3.3.2.7.3.8.6.2.3.3.6.4.9.1.3.1.7.1 1.2v4.5h-1.3v-4.4c0-.5-.1-.9-.2-1.1-.1-.3-.3-.4-.5-.6-.3-.2-.5-.3-.8-.3-.5 0-1 .2-1.3.5-.4.3-.6 1-.6 1.9v4h-1.3zm7.5.5l1.2.2c.1.3.2.7.4.8.3.3.8.3 1.3.3.6 0 1-.1 1.3-.3.3-.3.5-.6.7-.9.1-.3.1-.8.1-1.6-.5.7-1.3.9-2 .9-1 0-1.8-.3-2.3-1.1s-.8-1.6-.8-2.6c0-.7.2-1.3.4-1.9.3-.6.6-1 1.1-1.3s1-.5 1.7-.5c.8 0 1.6.3 2.1 1v-.8h1.2V50c0 1.2-.1 1.9-.3 2.4-.3.5-.6.8-1.1 1.1s-1.1.4-1.8.4c-.8 0-1.6-.2-2.1-.6-.8-.2-1.1-.8-1.1-1.7zm1.1-4.3c0 .9.2 1.7.6 2.1.4.4.8.7 1.4.7.6 0 1-.3 1.4-.7s.6-1.1.6-2.1c0-.9-.2-1.6-.6-2-.4-.4-.8-.7-1.4-.7-.6 0-1 .3-1.4.7-.4.5-.6 1.2-.6 2zm11.1 3.8V41h2l2.4 7.1c.3.7.4 1.2.5 1.5.1-.3.3-.9.5-1.6l2.4-7h1.8v10h-1.3v-8.4l-2.9 8.5h-1.2l-2.9-8.5v8.5h-1.3zm16.3-1c-.4.4-.9.7-1.3.8s-.9.3-1.3.3c-.8 0-1.4-.2-1.8-.6-.4-.4-.7-.9-.7-1.5 0-.3.1-.7.3-1s.3-.5.7-.7c.3-.2.6-.3.9-.4.3-.1.6-.2 1.1-.2 1-.1 1.8-.3 2.2-.4v-.3c0-.5-.1-.8-.3-1.1-.3-.3-.8-.4-1.4-.4-.6 0-1 .1-1.3.3s-.5.6-.6 1.1l-1.2-.2c.1-.5.3-.9.5-1.3.3-.3.6-.6 1.1-.8s1-.3 1.7-.3c.6 0 1.2.1 1.5.3.4.2.7.3.8.6.2.3.3.5.4.8 0 .3.1.6.1 1.2V48c0 1.2 0 1.8.1 2.2.1.3.2.6.3.8h-1.3c-.4-.2-.5-.5-.5-.9zm-.1-2.7c-.4.2-1.1.3-2 .5-.5.1-.8.2-1.1.3s-.3.3-.5.4c-.1.2-.2.3-.2.6s.1.6.3.8c.3.3.6.3 1.1.3s.9-.1 1.3-.3c.3-.2.7-.5.8-.8.2-.3.2-.7.2-1.3l.1-.5zm5.8 2.6l.2 1.1c-.3.1-.7.1-.9.1-.4 0-.8-.1-1-.3-.3-.2-.4-.3-.5-.6s-.2-.8-.2-1.4v-4.2h-.9v-.9h.9V42l1.3-.8v2.5h1.3v1.1H188V49c0 .3 0 .6.1.7.1.1.1.2.3.3.1.1.3.1.4.1-.1-.1.1-.1.3-.1zm6.2-1.3l1.3.2c-.2.8-.6 1.3-1.1 1.8-.6.4-1.3.6-2.1.6-1.1 0-1.9-.3-2.5-1s-.9-1.6-.9-2.8c0-1.3.3-2.2.9-2.8.7-.7 1.4-1 2.4-1s1.8.3 2.4 1c.6.7.9 1.6.9 2.8v.3h-5.4c.1.8.3 1.4.7 1.8.4.4.9.7 1.5.7.4 0 .8-.1 1.2-.3s.5-.8.7-1.3zm-4-2h4.1c-.1-.6-.3-1.1-.5-1.3-.4-.5-.9-.8-1.5-.8s-1 .2-1.4.6c-.5.4-.7.9-.7 1.5zm6.9 4.4v-7.3h1.1v1.1c.3-.5.6-.8.8-1 .3-.2.5-.3.8-.3.4 0 .8.2 1.3.4l-.4 1.2c-.3-.2-.6-.3-.9-.3-.3 0-.5.1-.8.3s-.3.4-.5.7c-.2.4-.2.9-.2 1.4v3.8h-1.2zm4.6-8.7V41h1.3v1.4h-1.3zm0 8.7v-7.3h1.3v7.3h-1.3zm7.9-1c-.4.4-.9.7-1.3.8s-.9.3-1.3.3c-.8 0-1.4-.2-1.8-.6-.4-.4-.7-.9-.7-1.5 0-.3.1-.7.3-1s.3-.5.7-.7c.3-.2.6-.3.9-.4.3-.1.6-.2 1.1-.2 1-.1 1.8-.3 2.2-.4v-.3c0-.5-.1-.8-.3-1.1-.3-.3-.8-.4-1.4-.4-.6 0-1 .1-1.3.3s-.5.6-.6 1.1l-1.2-.2c.1-.5.3-.9.5-1.3.3-.3.6-.6 1.1-.8s1-.3 1.7-.3c.6 0 1.2.1 1.5.3.4.2.7.3.8.6.2.3.3.5.4.8 0 .3.1.6.1 1.2V48c0 1.2 0 1.8.1 2.2.1.3.2.6.3.8h-1.3c-.3-.2-.4-.5-.5-.9zm-.1-2.7c-.4.2-1.1.3-2 .5-.5.1-.8.2-1.1.3s-.3.3-.5.4c-.1.2-.2.3-.2.6s.1.6.3.8c.3.3.6.3 1.1.3s.9-.1 1.3-.3c.3-.2.7-.5.8-.8.2-.3.2-.7.2-1.3l.1-.5zm3.1 3.7V41h1.3v10l-1.3.1zm2.7-2.2l1.3-.2c.1.5.3.8.6 1.1s.8.4 1.3.4c.6 0 1-.1 1.3-.3.3-.3.4-.5.4-.8s-.1-.5-.3-.7c-.2-.1-.6-.3-1.3-.4-.9-.3-1.5-.4-1.9-.6-.3-.2-.6-.4-.8-.7s-.3-.6-.3-1c0-.3.1-.6.3-.9.2-.3.3-.5.6-.7.2-.2.4-.3.8-.3s.7-.2 1.1-.2c.6 0 1.1.1 1.5.3s.8.4.9.7c.2.3.3.7.4 1.1l-1.2.2c-.1-.3-.3-.7-.5-.8-.3-.3-.7-.3-1.1-.3-.6 0-1 .1-1.3.3s-.3.4-.3.7c0 .2.1.3.2.4.1.2.3.3.5.3.1.1.5.2 1.1.3.8.3 1.5.4 1.8.6.3.2.6.3.8.7.2.3.3.7.3 1.1 0 .4-.1.8-.3 1.2s-.6.7-1 .8-1 .3-1.5.3c-.9 0-1.7-.2-2.2-.6-.7-.7-1.1-1.3-1.2-2zm8.7-39.2V3.5h2.8c.6 0 1 .1 1.3.2.3.1.5.3.7.6s.3.6.3.9c0 .4-.2.8-.4 1.1-.3.3-.8.5-1.3.6.3.1.4.2.5.3.3.3.5.5.7.8l1.1 1.7h-1l-.8-1.3c-.3-.3-.4-.7-.6-.8l-.4-.4c-.1-.1-.3-.2-.3-.2h-1.3v2.8l-1.3-.1zm.8-3.4h1.8c.3 0 .7 0 .9-.1.3-.1.3-.2.5-.3.1-.2.2-.3.2-.6s-.1-.5-.3-.8c-.3-.2-.6-.3-1-.3h-2l-.1 2.1z'
            />
            <path
              className='st0'
              d='M227.5 12.2c-3 0-5.5-2.5-5.5-5.6s2.4-5.6 5.5-5.6c3 0 5.5 2.5 5.5 5.6s-2.4 5.6-5.5 5.6zm0-10.4c-2.6 0-4.6 2.1-4.6 4.8 0 2.6 2.1 4.7 4.6 4.7 2.6 0 4.6-2.1 4.6-4.7.1-2.6-2-4.8-4.6-4.8zM0 3h55v55H0V3z'
            />
            <path
              d='M20.4 14.2c-.1.1-.2.2-.2.3v.1l9.6 5.4c-2.8-.6-5.8-1.6-8.5-.8v.2s.8.6 1 .8c1.2 1.2.7 2.9-1 3.2-1 .2-1.6-.3-1.9-.7-.1-.2-.2-.3-.1-.4-3.2 6.8 9 1.9 11.8 2.5-6.6 3.4-4.1 10.2-9.3 14.3 6.3-.5 4.6-6.4 8.1-9.6 1.6-1.4 3.3.2 5.1-1.2 2.7-2.1 1-7.5 1.1-10.4 0-1.4-.2-3.6.9-4.7 1.8-1.8 3.1-.6 3.2 1.5.2 3.7-3.1 6.8-2 10.8 2.1-2.3 5.2-2.5 6.8-5.3-.4 4.2-5.6 5.8-6.9 9.7 3.4-3.6 7.9-4.9 11.1-8.7-1.2 3.4-3.2 4.9-6.4 7.3-1.6 1.2-2 2.3-2.1 2.7-.2.4-.1.6-.1.6.1.1.3-.1.4-.2 2.3-2.6 6.3-4.6 9.7-4.6-3.4 1-6.4 3.7-8.3 6.7 1.4-1.3 3.6-3.4 5.7-3.4 2.3.1 3.8 1.8 2.8 3.9-2.5 5.3-10.3 1.7-12.8-1.4 1.5 3.9 5.4 6.5 9.2 7.9-3.2 0-6.4-1.1-9-2.9H38c.5 2.8 2.8 5.4 5 7.3.2.1.3.2.4.3-4-.7-6.8-1.5-7.9-5.6-.9-3.3-.5-9-5.1-9.5 2.8 3.5.9 7.1 1.4 11.2.4 3.7 2.4 6.2 5.1 8.5 4.8-2.1 9.3-5.2 12.3-9.5C61.5 22.7 36.5.9 20.4 14.2z'
              fill='#0b82c2'
            />
            <path
              d='M31.8 41.4c-.4-4 1.4-7.6-1.4-11.2 4.6.6 4.1 6.2 5.1 9.5 1.2 4.1 4 4.9 7.9 5.6-.2-.1-.3-.2-.4-.3-2.3-1.8-4.4-4.5-5-7.3l.4-.1c2.6 1.8 5.8 2.9 9 2.9-3.8-1.3-7.8-4-9.2-7.8 2.5 3 10.3 6.7 12.8 1.4 1-2.1-.5-3.8-2.8-3.9-2-.1-4.3 2-5.7 3.4 1.9-3 4.9-5.6 8.3-6.7-3.5.1-7.4 2-9.7 4.6-.1.1-.3.3-.4.2-.1 0-.1-.3.1-.6.2-.4.5-1.5 2.1-2.7 3.2-2.4 5.3-3.9 6.4-7.3-3.2 3.7-7.8 5.1-11.1 8.7 1.4-4 6.5-5.5 6.8-9.7-1.6 2.9-4.7 3-6.8 5.3-1.1-4 2.3-7.1 2-10.8-.1-2.1-1.4-3.2-3.2-1.5-1.2 1.3-1 3.5-1 4.9 0 2.9 1.6 8.2-1.1 10.4-1.8 1.4-3.5-.2-5.1 1.2-3.5 3.1-1.7 9-8 9.5 5.2-4.2 2.8-10.9 9.2-14.4-2.8-.6-15 4.2-11.8-2.5-.1.1 0 .3.1.4.3.4.9.9 1.9.7 1.6-.4 2.2-2 1-3.2-.3-.2-1-.8-1-.8v-.2c2.8-.8 5.8.2 8.5.8l-9.5-5.4-7.9-4.5c-4.6 3.7-9.1 5.6-9.7 11.7-.4 3.7.1 7.5 1.2 11.1C7 44 16.7 51.1 28.4 51.6c3 0 5.7-.6 8.5-1.7-2.7-2.3-4.7-4.8-5.1-8.5z'
              fill='#fff'
            />
          </svg>
        </div>
        <div className='box-top'>
          <div className='logo-value' />
          <div className='slogan'>
            <h2>Giải pháp gỗ nội thất cho mọi nhà</h2>
          </div>
        </div>
      </div>
      <div className='wrap-social-facilities' ref={socialFacilitiesRef}>
        <a className='news-regis regis-fixed special-grad' href='/' aria-label='newsregister'>
          <span className='icon-news-regis'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 404 404'>
              <path
                fill='currentColor'
                d='M323.4,166.8c0-0.1,0-0.2,0-0.3c0-0.3-0.1-0.6-0.1-0.9c0,0,0,0,0,0c-0.1-0.3-0.2-0.6-0.3-0.9
c0-0.1-0.1-0.1-0.1-0.2c-0.1-0.3-0.3-0.5-0.4-0.7c0,0,0-0.1-0.1-0.1c-0.2-0.2-0.4-0.5-0.6-0.7c-0.1-0.1-0.1-0.1-0.2-0.2
c-0.2-0.2-0.5-0.4-0.8-0.6c0,0,0,0,0,0c0,0,0,0,0,0L204.2,94.4c-1.7-1-3.8-1-5.6,0L83.3,162.2c0,0,0,0,0,0c0,0,0,0,0,0l0,0
c0,0,0,0,0,0c-0.3,0.2-0.5,0.4-0.8,0.6c-0.1,0.1-0.1,0.1-0.2,0.2c-0.2,0.2-0.4,0.4-0.6,0.7c0,0-0.1,0.1-0.1,0.1
c-0.2,0.2-0.3,0.5-0.4,0.7c0,0.1-0.1,0.1-0.1,0.2c-0.1,0.3-0.2,0.6-0.3,0.9c0,0,0,0.1,0,0.1c-0.1,0.3-0.1,0.6-0.1,0.8
c0,0.1,0,0.2,0,0.3c0,0.1,0,0.1,0,0.2v120.7c0,3,2.5,5.5,5.5,5.5h100.2l10.7,14.9c1,1.4,2.6,2.3,4.4,2.3c0,0,0.1,0,0.1,0
c1.7,0,3.3-0.8,4.4-2.2l11.5-15.1h100.6c3,0,5.5-2.5,5.5-5.5V167C323.4,166.9,323.4,166.8,323.4,166.8z M210.3,284.3l-8.7,11.3
l-8.1-11.2c-1-1.4-2.7-2.3-4.5-2.3H91.6V176.4l27,15.4l5.5,3.1l5.5,3.1l69.1,39.3c1.7,1,3.7,1,5.4,0l70.3-39.6l5.5-3.1l5.5-3.1
l27-15.2v105.7h-97.8C212.9,282.1,211.3,282.9,210.3,284.3z M274.4,185.2l-73,41.1l-71.9-40.9v-12.9h144.8V185.2z M201.4,105.5
l105.4,61.4L285.4,179v-12c0-3-2.5-5.5-5.5-5.5H124.1c-3,0-5.5,2.5-5.5,5.5v12.2L97,166.9L201.4,105.5z'
              />
              <circle fill='currentColor' cx='201.4' cy='125.6' r='7.5' />
            </svg>
          </span>
          <span className='text-news-regis'>Đăng ký nhận tin</span>
        </a>
        <a
          className='news-regis regis-fixed special-grad'
          aria-label='levelmenu'
          href='/'
          data-name={429}
          data-title='An Cuong wood working materials'
          data-description='An Cuong wood working materials'
          data-keyword='An Cuong wood working materials'
        >
          <span className='icon-news-regis'>
            <svg xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100'>
              <path
                fill='currentColor'
                d='M49.4,22.5c-2.1-0.2-4.1,0-6.1,0.4l-3.7,0.9l2.8,2.5c1.1,1,1.6,2.3,1.4,3.8c-0.2,1.8-1.7,3.3-3.5,3.6
c-1.9,0.3-3.7-0.6-4.5-2.3L34.2,28l-1.9,3.3c-1.6,2.8-2.4,6-2.3,9.3c0.3,9.4,8.2,17.1,17.7,17.1h0.1c9.5-0.1,17.1-7.5,17.5-17
C65.6,31.4,58.7,23.4,49.4,22.5z M59.9,40.5c-0.3,6.5-5.6,11.7-12.1,11.8h-0.1c-6.5,0-12-5.3-12.2-11.8c0-1.3,0.1-2.6,0.5-3.9
c1.6,1.2,3.7,1.8,5.8,1.4c3.2-0.5,5.8-3.1,6.2-6.3c0.2-1.3,0-2.6-0.5-3.8c0.5,0,1,0,1.5,0.1C55.2,28.5,60.1,34.2,59.9,40.5z'
              />
              <path
                fill='currentColor'
                d='M95.9,46.3c-0.1-0.3-0.3-0.5-0.4-0.8c-0.1-0.1-0.5-0.9-0.5-0.9c-0.1-0.1-0.2-0.3-0.3-0.4l-0.8-1.1l-1.2-1.4l-1.3-1.2
c-0.5-0.4-1.2-0.9-1.8-1.4c-2.2-1.5-4.8-2.9-7.9-4c-2.8-1-5.6-1.7-8.4-2.1H73c-2.9-11-13-19.3-25-19.3c-12.1,0-22.4,8.4-25.2,19.7
l-0.5,0.1c-3,0.7-6.8,1.8-10.6,3.7c-1.9,1-3.6,2.1-5,3.5c-0.8,0.9-1.5,1.7-2.1,2.6c-0.7,1.2-1.1,2.1-1.5,3c-0.4,1.2-0.7,2.3-0.8,3.3
c-0.1,0.5-0.1,0.9-0.1,1.3v0.5v0.4c0,0.4,0,0.8,0.1,1.3c0.2,2.2,0.9,4.5,2,6.6c0.6,1,1.2,2,1.9,2.8c0.1,0.1,0.2,0.2,0.3,0.4
c0.2,0.3,0.5,0.6,0.7,0.8l1,1C8.5,65,8.8,65.2,9,65.4C9.3,65.5,9.9,66,9.9,66c0.3,0.2,0.5,0.4,0.8,0.6l1.8,1.3l0.6,0.4
c5.9,3.7,12.8,6.1,21.2,7.6c3,0.5,6.1,0.8,9.1,0.9c0.6,0,1.3,0,1.9,0c0.3,0,0.6,0,1,0c0.6,0,1.2,0,1.8,0c0.9,0,1.9-0.1,2.7-0.1
c0.5,0,1-0.1,1.4-0.1l-3.9,4.7l7.1-0.5l5.4-6.5l-6.1-5.8L47.6,69l4.2,4c-2.2-0.1-4.4-0.3-6.4-0.5c-4.3-0.5-7.5-1-10.4-1.7
c-3.5-0.8-6.9-1.8-10.1-2.9c-3.3-1.2-6.5-2.7-9.3-4.5l-0.5-0.3L13.5,62c-0.2-0.1-0.4-0.3-0.6-0.5c-0.1-0.1-0.2-0.2-0.3-0.3
s-0.3-0.2-0.4-0.3c-0.2-0.2-0.4-0.3-0.6-0.5l-1-0.9c-0.2-0.1-0.3-0.3-0.4-0.5c-0.1-0.1-0.2-0.3-0.3-0.4c-0.5-0.6-1-1.2-1.4-1.8
c-1.6-2.6-2-5.9-1.1-8.9c0.2-0.8,0.6-1.5,0.9-2.1c0.4-0.7,0.8-1.3,1.3-1.9c0.5-0.5,1-1.1,1.7-1.7c0.6-0.5,1.3-1,2.1-1.5
c2.7-1.8,5.8-3.2,8.8-4.6c-0.2,1.2-0.3,2.4-0.3,3.6c0,14.3,11.6,26,26,26c14.3,0,26-11.6,26-26c0-1.3-0.1-2.6-0.3-3.9
c2.2,0.9,4.4,1.9,6.5,3c2.5,1.3,4.6,2.7,6.5,4.2c2,1.7,3.5,3.6,4.3,5.4c0.4,0.9,0.6,1.9,0.7,3c0,1-0.2,2-0.5,3c-0.7,1.9-2,3.7-4,5.7
c-1.6,1.5-3.4,3-6.1,4.8c-4.4,2.9-9.3,5.3-14,7.7l-1.8,0.9l0.7,1.9l1.7-0.4c5.8-1.3,11.1-3.3,16-5.9c2.9-1.6,5.3-3.2,7.3-5
c2.7-2.4,4.5-5,5.5-7.8c0.6-1.7,0.9-3.4,0.8-5.1C97,49.4,96.6,47.8,95.9,46.3z M48,61.6c-12.1,0-21.9-9.8-21.9-21.9
S35.9,17.8,48,17.8s21.9,9.8,21.9,21.9S60.1,61.6,48,61.6z'
              />
            </svg>
          </span>
          <span className='text-news-regis'>3D - VR 360</span>
        </a>
      </div>
      <div className='right-header'>
        <div className='search-but'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>
            <path
              fill='currentColor'
              d='M17.9,29.9L12,35.8c-0.9,0.9-0.9,2.4,0,3.4c0.9,0.9,2.4,0.9,3.4,0l5.9-5.9c-0.7-0.4-1.4-0.8-2-1.4C18.7,31.3,18.2,30.6,17.9,29.9z'
            ></path>
            <path
              fill='currentColor'
              d='M37.7,13.4c-4.8-4.8-12.7-4.8-17.5,0s-4.8,12.6,0,17.4c4.8,4.8,12.7,4.8,17.5,0C42.5,25.9,42.5,18.2,37.7,13.4z M35.5,28.7c-3.7,3.7-9.6,3.7-13.3,0s-3.7-9.5,0-13.2c3.7-3.7,9.6-3.7,13.3,0C39.2,19,39.2,25,35.5,28.7z'
            ></path>
          </svg>
        </div>
        <div className='search-form'>
          <div className='form-row-search'>
            <form
              // onSubmit='return false;'
              action='https://www.ancuong.com/tim-kiem.html'
              className='search-id-form'
              id='search'
              method='get'
            >
              <input
                type='text'
                id='qsearch'
                name='qsearch'
                data-holder='Tìm kiếm...'
                defaultValue='Tìm kiếm...'
                data-default='Tìm kiếm...'
                aria-label='search-input'
              />
              <input
                type='hidden'
                id='defaultvalue'
                name='defaultvalue'
                defaultValue='Tìm kiếm...'
                aria-label='search-input'
              />
              <input
                type='hidden'
                id='errorsearch'
                name='errorsearch'
                defaultValue='Từ khóa không được dưới 2 kí tự, vui lòng nhập lại từ khóa tìm kiếm!'
                aria-label='search-input'
              />
              <input
                type='hidden'
                id='href_search'
                name='href_search'
                defaultValue='https://www.ancuong.com/tim-kiem.html'
                aria-label='search-input'
              />
            </form>
          </div>
        </div>
        <div className='language'>
          <form
            id='change_lang'
            encType='multipart/form-data'
            method='post'
            action='https://www.ancuong.com/index.php?route=common/home'
          >
            <ul>
              <li>
                <button className='click-lang' aria-label='lang'>
                  en
                </button>
              </li>
            </ul>
            <input type='hidden' defaultValue name='language_code' />
            <input id='changlanguage_redirect' type='hidden' defaultValue='https://www.ancuong.com/' name='redirect' />
          </form>
        </div>
      </div>
      <nav className='nav'>
        <div className='wrap-header'>
          <div className='navigation'>
            <ul>
              <li>
                <a className='link-home link-load' href='/' data-name='home-page' aria-label='home'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 50'>
                    <path fill='currentColor' d='M30,11L14,27h6l2,12h6v-6h4v6h6l2-12h6L30,11z' />
                  </svg>
                </a>
              </li>
              <li>
                <Link
                  className='link-load btn'
                  href='/about'
                  data-name='about-page'
                  data-title='An Cuong wood working materials'
                  data-description='An Cuong wood working materials'
                  data-keyword='An Cuong wood working materials'
                >
                  Giới thiệu
                </Link>
              </li>
              <li>
                <div
                  className='has-sub btn'
                  data-name='product-page'
                  data-open='one'
                  data-title='An Cuong wood working materials'
                  data-description='An Cuong wood working materials'
                  data-keyword='An Cuong wood working materials'
                  aria-label='sub'
                >
                  Sản phẩm
                </div>
                <div className='sub-menu' data-menu='one'>
                  <div className='all-sub'>
                    <div className='scrollA'>
                      <div className='title-sub newproduct '>
                        <a
                          className='link-load special-nav'
                          href='/'
                          data-name='product-454'
                          data-title='Sản phẩm mới'
                          data-description
                          data-keyword
                        >
                          Sản phẩm mới
                        </a>
                      </div>
                      <div className='title-sub'>Sản phẩm chính</div>
                      <div className='item-sub add'>
                        <div className='hover-btn' data-sub='s-160'>
                          VÁN MFC &amp;CÁC LOẠI VÁN PHỦ MELAMINE
                        </div>
                        <i />
                      </div>
                      <div className='second-sub-menu' data-show='s-160'>
                        <div className='second-all-sub'>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/product/1'
                              data-name='product-3'
                              data-title='Melamine Phủ Trên Ván Dăm (MFC)'
                              data-description
                              data-keyword
                            >
                              Melamine Phủ Trên Ván Dăm (MFC)
                            </a>
                          </div>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/product/11'
                              data-name='product-11'
                              data-title='An Cường - Melamine Phủ Trên MDF (Melamine MDF)'
                              data-description='Melamine MDF được ứng dụng vô cùng rộng rãi trong lĩnh vực nội thất văn phòng, nhà ở, chung cư cao cấp, bệnh viện, trường học, nội thất trẻ em...'
                              data-keyword='ancuong, goancuong, gocongnghiepancuong, An Cường, Melamine phủ trên mdf, MDF, An Cường Melamine, An Cường Melamine phủ MDF, an cuong phu mdf, an cuong melamine phu tren mdf'
                            >
                              Melamine Phủ Trên MDF (Melamine MDF)
                            </a>
                          </div>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/product/13'
                              data-name='product-13'
                              data-title='An Cường - Melamine Phủ Trên HDF (Melamine HDF) '
                              data-description='Melamine HDF được nhiều khách hàng tin tưởng lựa chọn cho các thiết kế nội thất nhờ nhiều ưu điểm vượt trội.'
                              data-keyword='ancuong, goancuong, gocongnghiepancuong, HDF, Melamine phủ trên HDF, Melamine HDF, An Cường Melamine HDF, an cuong melamine hdf'
                            >
                              Melamine Phủ Trên HDF (Melamine HDF){' '}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='item-sub add'>
                        <div className='hover-btn' data-sub='s-349'>
                          TẤM LAMINATE
                        </div>
                        <i />
                      </div>
                      <div className='second-sub-menu' data-show='s-349'>
                        <div className='second-all-sub'>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-10'
                              data-title='An Cường - Laminate Kingdom'
                              data-description='Laminate đang mở ra nhiều khả năng ứng dụng đầy mê hoặc và đáng ngạc nhiên cho công nghiệp đồ gỗ và trang trí nội thất.'
                              data-keyword='ancuong, goancuong, gocongnghiepancuong, LK, An Cường Laminate, Laminate Kingdom, an cuong laminate kingdom, van laminate kingdom, ván laminate'
                            >
                              Laminate Kingdom
                            </a>
                          </div>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-41'
                              data-title='Laminate IMO (International Marine Organization)'
                              data-description
                              data-keyword
                            >
                              Laminate IMO (International Maritime Organization)
                            </a>
                          </div>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-12'
                              data-title='An Cường - Formica Laminate'
                              data-description='An Cường là nhà cung cấp nguyên vật liệu trang trí nội thất và vật liệu décor hàng đầu tại Việt Nam từ năm 1994. Từ ngày 01.07.2009, chúng tôi được chỉ định là nhà phân phối độc quyền các dòng sản phẩm Formica® Laminate tại thị trường Việt Nam.'
                              data-keyword='ancuong, goancuong, gocongnghiepancuong, Formica, Formica Laminate, An Cường Formica Laminate, An Cường Formica, an cuong formica laminate'
                            >
                              Formica Laminate
                            </a>
                          </div>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-58'
                              data-title='KINGDOM BASIC'
                              data-description='KINGDOM BASIC là dòng laminate tiêu chuẩn. Bên cạnh những ưu điểm vốn có của tấm laminate như đẹp, bền, dễ thi công, ứng dụng đa dạng trong nội thất gỗ công nghiệp'
                              data-keyword='an cường, gỗ an cường, laminate, laminate basic, kingdom basic, giải pháp, giá rẻ, ván sàn, gỗ công nghiệp, acg, dễ thi công, thiết kế, giá thành'
                            >
                              KINGDOM BASIC
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='item-sub add'>
                        <div className='hover-btn' data-sub='s-346'>
                          TẤM ACRYLIC BÓNG GƯƠNG
                        </div>
                        <i />
                      </div>
                      <div className='second-sub-menu' data-show='s-346'>
                        <div className='second-all-sub'>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-8'
                              data-title='High quality - Acrylic'
                              data-description='An Cường là công ty tiên phong tại khu vực Đông Nam Á trong việc đầu tư hơn 3 triệu USD trang bị dây chuyền dán tấm Acrylic bóng gương và dây chuyền dán chỉ không đường cạnh hiện đại của Đức, có thể dán tấm Acrylic trên mọi bề mặt gỗ. 100% tấm Acrylic đều'
                              data-keyword='ancuong, goancuong, gocongnghiepancuong, Acrylic, High gloss Acrylic, An Cường High Gloss Acrylic, van san, Ván sàn Acrylic'
                            >
                              High quality - Acrylic
                            </a>
                          </div>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-59'
                              data-title='Premium - Sky Lux Acrylic'
                              data-description='Cùng An Cường khám phá 5 tông màu Sky Lux Acrylic mới ngay bây giờ nhé!'
                              data-keyword='an cường, gỗ an cường, gỗ công nghiệp, Acrylic, High gloss Acrylic, An Cường High Gloss Acrylic, van san, Ván sàn Acrylic, acrylic là gì, gỗ, ván sàn, vách ốp, nội thất'
                            >
                              Premium - Sky Lux Acrylic
                            </a>
                          </div>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-6'
                              data-title='Standard - Arilux Plus'
                              data-description='Hiện nay, tấm ARILUX PLUS đã có tồn kho sẵn với số lượng lớn trên lõi ván MDF chống ẩm 17mm hoặc tấm phôi có độ dày 0.7mm, giúp Khách hàng thoải mái chọn lựa tuỳ theo nhu cầu thực tế'
                              data-keyword='ancuong, goancuong, gocongnghiepancuong, acrilux, Mirror MDF, MDF, An Cường arilux, melamine, acrylic, bóng gương, ốp vách, ốp tủ'
                            >
                              Standard - Arilux Plus
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='item-sub add'>
                        <div className='hover-btn' data-sub='s-348'>
                          SÀN GỖ CÔNG NGHIỆP
                        </div>
                        <i />
                      </div>
                      <div className='second-sub-menu' data-show='s-348'>
                        <div className='second-all-sub'>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-23'
                              data-title='Sàn Gỗ Công Nghiệp An Cường'
                              data-description='Sàn gỗ An Cường- tiêu chuẩn mới cho nội thất hiện đại!
Hotline: 19006944 | www.ancuong.com'
                              data-keyword='an cường, acg, gỗ an cường, sàn gỗ công nghiệp, thi công, nội thất, nhà đẹp, nội thất gỗ công nghiệp, melamine,, acrylic, căn hộ, nội thất chung cư, sàn gỗ, san go cong nghiep, báo giá, ván sàn, vách trang trí, sàn gỗ, sàn xương cá, ván sàn, sàn đá'
                            >
                              Sàn Gỗ Công Nghiệp An Cường
                            </a>
                          </div>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-22'
                              data-title='An Cường / Kronospan - 12MM / 15MM'
                              data-description='Bộ sưu tập gồm 9 màu vân gỗ ấn tượng được sản xuất trên dây chuyền công nghệ hiện đại bậc nhất về sàn gỗ công nghiệp của TẬP ĐOÀN KRONOSPAN danh tiếng trên thế giới, theo tiêu chuẩn E1 và AC3 của châu Âu, an toàn cho người sử dụng và vật nuôi trong nhà.'
                              data-keyword='ancuong, goancuong, gocongnghiepancuong, kronospan, An Cường Kronospan, Kronospan'
                            >
                              An Cường / Kronospan{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='item-sub add'>
                        <div className='hover-btn' data-sub='s-449'>
                          TẤM LAM TRANG TRÍ (ACOUSTIC, WALL &amp;CEILING, LAMBRI)
                        </div>
                        <i />
                      </div>
                      <div className='second-sub-menu' data-show='s-449'>
                        <div className='second-all-sub'>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-55'
                              data-title='ACOUSTIC PANEL'
                              data-description='Hotline: 19006944 | www.ancuong.com'
                              data-keyword='an cường, gỗ an cường, acg, tấm lam trang trí, lamri, wall, lam treo tường, acoustic, wall, ceiling, giải pháp, ứng dụng, nội thất, trang trí, nhà cửa, căn hộ, ván sàn, gỗ công nghiệp, vách'
                            >
                              TẤM TRANG TRÍ ACOUSTIC
                            </a>
                          </div>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-56'
                              data-title='TẤM TRANG TRÍ TRẦN & VÁCH'
                              data-description='Hotline: 19006944 | www.ancuong.com'
                              data-keyword='an cường, gỗ an cường, acg, tấm lam trang trí, lamri, wall, lam treo tường, acoustic, wall, ceiling, giải pháp, ứng dụng, nội thất, trang trí, nhà cửa, căn hộ, ván sàn, gỗ công nghiệp, vách'
                            >
                              TẤM TRANG TRÍ WALL &amp;CEILING{' '}
                            </a>
                          </div>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-57'
                              data-title='TẤM TRANG TRÍ LAMBRI'
                              data-description='Hotline: 19006944 | www.ancuong.com'
                              data-keyword='an cường, gỗ an cường, acg, tấm lam trang trí, lamri, wall, lam treo tường, acoustic, wall, ceiling, giải pháp, ứng dụng, nội thất, trang trí, nhà cửa, căn hộ, ván sàn, gỗ công nghiệp, vách'
                            >
                              TẤM TRANG TRÍ LAMBRI
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='item-sub add'>
                        <div className='hover-btn' data-sub='s-347'>
                          TẤM VENEER
                        </div>
                        <i />
                      </div>
                      <div className='second-sub-menu' data-show='s-347'>
                        <div className='second-all-sub'>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-9'
                              data-title='An Cường - Veneer'
                              data-description='Công ty An Cường là đơn vị tiên phong ở Việt Nam cung cấp dòng sản phẩm gỗ lạng veneer cao cấp nhất được nhập khẩu 100% từ những công ty có bề dày kinh nghiệm hơn 70 năm sản xuất Veneer tại Ý.'
                              data-keyword='ancuong, goancuong, gocongnghiepancuong, Veneer, An Cường Veneer, ván Veneer, sàn Veneer'
                            >
                              Veneer
                            </a>
                          </div>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-5'
                              data-title='An Cường - Eco-Veneer'
                              data-description='Nhằm đa dạng hóa sản phẩm để đáp ứng nhu cầu ngày càng cao của thị trường, Công ty Gỗ An Cường ra mắt sản phẩm Eco Veneer (Veneer nhân tạo) có hiệu ứng như Veneer thật để phục vụ Quý khách.'
                              data-keyword='ancuong, goancuong, gocongnghiepancuong, eco veneer, eco-veneer, An Cường eco - veneer, eco, veneer'
                            >
                              Eco-Veneer
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='item-sub add'>
                        <div className='hover-btn' data-sub='s-451'>
                          VẬT LIỆU CHỐNG CHÁY, CHẬM CHÁY
                        </div>
                        <i />
                      </div>
                      <div className='second-sub-menu' data-show='s-451'>
                        <div className='second-all-sub'>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-54'
                              data-title='TẤM CHỐNG CHÁY AN CƯỜNG (FIRE PROOF BOARD)'
                              data-description='Tấm chống cháy An Cường – Fireproof Board được sản xuất bằng công nghệ ép tấm mới nhất của Châu Âu.'
                              data-keyword='an cường, acg, gỗ an cường, melamine, laminate, ván chống cháy, ván cháy chậm, fdb, frb, fire proof board'
                            >
                              TẤM CHỐNG CHÁY AN CƯỜNG (FIRE PROOF BOARD)
                            </a>
                          </div>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-53'
                              data-title='TẤM VÁN CHẬM CHÁY (TẤM FRB) '
                              data-description='Tấm chống cháy MGO với khả năng chống cháy tốt và đặc biệt không sinh khói khi tiếp xúc với lửa, thân thiện với môi trường và dễ dàng thi công.'
                              data-keyword='an cường, acg, gỗ an cường, gỗ công nghiệp, ván chống cháy, ván chậm cháy, ván gỗ, thi công, thiết kế, giải pháp'
                            >
                              TẤM VÁN CHẬM CHÁY (TẤM FRB){' '}
                            </a>
                          </div>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-62'
                              data-title='TẤM MGO'
                              data-description='Tấm chống cháy MGO là dòng ván công nghiệp có khả năng chống cháy, chịu ẩm tốt, cách âm, chống côn trùng và có độ bền cao, đặc biệt thích hợp cho thi công trần và vách ngăn.'
                              data-keyword='an cường, gỗ an cường, mgo, ván, chống cháy, vật liệu chống cháy'
                            >
                              TẤM CHỐNG CHÁY MGO (MGO FIRE PROOF BOARD)
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='item-sub add'>
                        <div className='hover-btn' data-sub='s-450'>
                          VẬT LIỆU NGOÀI TRỜI
                        </div>
                        <i />
                      </div>
                      <div className='second-sub-menu' data-show='s-450'>
                        <div className='second-all-sub'>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-60'
                              data-title='TẤM TRANG TRÍ NGOÀI TRỜI'
                              data-description='Sản phẩm TẤM TRANG TRÍ NGOÀI TRỜI sẽ là lựa chọn hoàn hảo, bền, đẹp tự nhiên như bề mặt gỗ thật, để ứng dụng cho các dự án của Quý khách.'
                              data-keyword='an cường, gỗ an cường, tấm trang trí ngoài trời, tấm ván, ván'
                            >
                              TẤM TRANG TRÍ NGOÀI TRỜI
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='item-sub add'>
                        <div className='hover-btn' data-sub='s-332'>
                          PHỤ KIỆN
                        </div>
                        <i />
                      </div>
                      <div className='second-sub-menu' data-show='s-332'>
                        <div className='second-all-sub'>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-27'
                              data-title='An Cuong wood working materials'
                              data-description='An Cuong wood working materials'
                              data-keyword='ancuong, goancuong, gocongnghiepancuong'
                            >
                              Hettich
                            </a>
                          </div>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-28'
                              data-title='An Cuong wood working materials'
                              data-description='An Cuong wood working materials'
                              data-keyword='ancuong, goancuong, gocongnghiepancuong'
                            >
                              Imundex
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='item-sub add'>
                        <div className='hover-btn' data-sub='s-333'>
                          SẢN PHẨM HỖ TRỢ
                        </div>
                        <i />
                      </div>
                      <div className='second-sub-menu' data-show='s-333'>
                        <div className='second-all-sub'>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-29'
                              data-title='An Cuong wood working materials'
                              data-description='An Cuong wood working materials'
                              data-keyword='ancuong, goancuong, gocongnghiepancuong'
                            >
                              CHỈ NHỰA DÁN CẠNH
                            </a>
                          </div>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-30'
                              data-title='KEO NÓNG CHẢY DẠNG HẠT'
                              data-description='Xin giới thiệu đến Quý khách hàng dòng sản phẩm KEO ADINO – KEO NÓNG CHẢY DẠNG HẠT được An Cường nhập khẩu và phân phối trực tiếp'
                              data-keyword='an cường, gỗ an cường, acg, keo, nóng chảy, keo nóng cháy dạng hạt, giải pháp, phụ kiện, sản phẩm hỗ trợ, keo hạt'
                            >
                              KEO NÓNG CHẢY DẠNG HẠT
                            </a>
                          </div>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-32'
                              data-title='HỆ ỐP VÁCH DẠNG CÀI'
                              data-description='Giải pháp này giúp khách hàng dễ dàng, tiện lợi trong thi công lắp đặt cùng với việc bảo đảm tính lâu bền cho vách tường gỗ: chống mối mọt, kháng nước rất hiệu quả. '
                              data-keyword='ancuong, goancuong, gocongnghiepancuong'
                            >
                              HỆ ỐP VÁCH DẠNG CÀI
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='item-sub add'>
                        <div className='hover-btn' data-sub='s-460'>
                          SẢN PHẨM VỆ SINH, BẢO VỆ NỘI THẤT
                        </div>
                        <i />
                      </div>
                      <div className='second-sub-menu' data-show='s-460'>
                        <div className='second-all-sub'>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-61'
                              data-title='XỊT CHỐNG MỐC CHO GỖ NỘI THẤT'
                              data-description='Hãy chọn An Cường để tạo ra một môi trường sống lành mạnh và an toàn cho bạn cùng gia đình.'
                              data-keyword='an cường, gỗ an cường, xịt chống mốc, xịt chống mọt, gỗ mốc, ẩm gỗ, gỗ bị hư, gỗ bị mốc'
                            >
                              XỊT CHỐNG MỐC CHO GỖ NỘI THẤT
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='item-sub add'>
                        <div className='hover-btn' data-sub='s-350'>
                          VÁN THÔ CÔNG NGHIỆP
                        </div>
                        <i />
                      </div>
                      <div className='second-sub-menu' data-show='s-350'>
                        <div className='second-all-sub'>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-4'
                              data-title='An Cường - Tấm PB Chống Ẩm Lõi Xanh V313'
                              data-description='An Cuong wood working materials'
                              data-keyword='ancuong, goancuong, gocongnghiepancuong, ván chống ám'
                            >
                              Tấm PB Chống Ẩm Lõi Xanh
                            </a>
                          </div>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-16'
                              data-title='An Cường - Tấm HDF '
                              data-description='An Cuong wood working materials'
                              data-keyword='ancuong, goancuong, gocongnghiepancuong, acg, an cường, gỗ công nghiệp'
                            >
                              Tấm HDF
                            </a>
                          </div>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-15'
                              data-title='An Cường - Tấm MDF Chống Ẩm Lõi Xanh V313'
                              data-description='An Cuong wood working materials'
                              data-keyword='ancuong, goancuong, gocongnghiepancuong'
                            >
                              Tấm MDF Chống Ẩm Lõi Xanh{' '}
                            </a>
                          </div>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-17'
                              data-title='An Cuong wood working materials'
                              data-description='An Cuong wood working materials'
                              data-keyword='ancuong, goancuong, gocongnghiepancuong'
                            >
                              Tấm Black HDF
                            </a>
                          </div>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-18'
                              data-title='Tấm OSB'
                              data-description='Ván OSB (Oriented Strand Board, hay còn được gọi là ván dăm định hướng) là một trong số những dòng ván công nghiệp có nhiều ứng dụng được sử dụng trên thế giới. '
                              data-keyword='ancuong, goancuong, gocongnghiepancuong, an cường, gỗ công nghiệp, ván thô, van go, nguyên liệu, vật liệu, xây dựng, thi công, acg, go xay dung, osb'
                            >
                              Tấm OSB
                            </a>
                          </div>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-19'
                              data-title='An Cuong wood working materials'
                              data-description='An Cuong wood working materials'
                              data-keyword='ancuong, goancuong, gocongnghiepancuong'
                            >
                              Tấm WPB
                            </a>
                          </div>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-20'
                              data-title='An Cuong wood working materials'
                              data-description='An Cuong wood working materials'
                              data-keyword='ancuong, goancuong, gocongnghiepancuong'
                            >
                              Gỗ Plywood Chống Nước
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='item-sub add'>
                        <div className='hover-btn' data-sub='s-351'>
                          CỬA GỖ CÔNG NGHIỆP
                        </div>
                        <i />
                      </div>
                      <div className='second-sub-menu' data-show='s-351'>
                        <div className='second-all-sub'>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-24'
                              data-title='Cửa Chống Cháy / Vật Liệu Hoàn thiện / Kiểu Dáng'
                              data-description='Với kho vật liệu bề mặt khổng lồ từ 1500 màu sắc và bề mặt hoàn thiện khác nhau trong các bộ sưu tập Melamine, Laminate, Acrylic, Veneer của An Cường. Chúng tôi cung cấp giải pháp vô tận cho các thiết kế cửa hiện đại theo xu thế của thị trường.'
                              data-keyword='ancuong, goancuong, gocongnghiepancuong'
                            >
                              Cửa Chống Cháy / Vật Liệu Hoàn thiện / Kiểu Dáng
                            </a>
                          </div>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-25'
                              data-title='Cửa Chống Nước / Vật Liệu Hoàn thiện / Kiểu Dáng'
                              data-description='Cửa gỗ chống nước An Cường với lõi sử dụng tấm WPB có kết cấu gốc nhựa, trọng lượng nhẹ, chậm cháy và hoàn toàn chống nước, được sử dụng rộng rãi cho các thiết kế quảng cáo, hội chợ, trang trí nội và ngoại thất, đặc biệt là cửa chống nước, tủ bếp, tủ vệ s'
                              data-keyword='ancuong, goancuong, gocongnghiepancuong, acg, cửa chống cháy, chống nước, chống ẩm'
                            >
                              Cửa Chống Nước / Vật Liệu Hoàn thiện / Kiểu Dáng
                            </a>
                          </div>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-26'
                              data-title='Cửa Chống Ẩm / Vật Liệu Hoàn thiện / Kiểu Dáng'
                              data-description='An Cường phát huy tối đa đặc tính của MDF chống ẩm vào ứng dụng thi công cửa nhà vệ sinh, phòng bếp những khu vực thường xuyên tiếp xúc với nước và có độ ẩm cao.'
                              data-keyword='ancuong, goancuong, gocongnghiepancuong, cửa, chống cháy, chống nước, chống ẩm'
                            >
                              Cửa Chống Ẩm / Vật Liệu Hoàn thiện / Kiểu Dáng
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='item-sub add'>
                        <div className='hover-btn' data-sub='s-409'>
                          SMARTHOME
                        </div>
                        <i />
                      </div>
                      <div className='second-sub-menu' data-show='s-409'>
                        <div className='second-all-sub'>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-42'
                              data-title='SCHNEIDER ELECTRIC'
                              data-description
                              data-keyword
                            >
                              SCHNEIDER ELECTRIC
                            </a>
                          </div>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-43'
                              data-title='SẢN PHẨM HỖ TRỢ'
                              data-description
                              data-keyword
                            >
                              SẢN PHẨM HỖ TRỢ
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a
                  className='link-load btn'
                  href='/'
                  data-name='news-page'
                  data-title='Giải pháp'
                  data-description
                  data-keyword
                >
                  Giải pháp
                </a>
              </li>
              <li>
                <div
                  className='has-sub btn'
                  data-name='project-page'
                  data-open='data-pro'
                  data-title='An Cuong wood working materials'
                  data-description='An Cuong wood working materials'
                  data-keyword='An Cuong wood working materials'
                  aria-label='sub'
                >
                  Dự án
                </div>
                <div className='sub-menu' data-menu='data-pro'>
                  <div className='all-sub'>
                    <div className='scrollA'>
                      <div className='title-sub'>Dự án nổi bật</div>
                      <div className='item-sub '>
                        <a
                          className='link-load sub-btn'
                          href='/'
                          data-sub
                          data-name='product-437'
                          data-title='DỰ ÁN TRONG NƯỚC'
                          data-description
                          data-keyword
                        >
                          DỰ ÁN TRONG NƯỚC
                        </a>
                      </div>
                      <div className='item-sub add' data-load='first-load'>
                        <div className='hover-btn' data-sub='s-398'>
                          XUẤT KHẨU
                        </div>
                        <i />
                      </div>
                      <div className='second-sub-menu' data-show='s-398'>
                        <div className='second-all-sub'>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-45'
                              data-title='AN CUONG MANUFACTURING FACTORY INTRODUCTION'
                              data-description
                              data-keyword
                            >
                              AN CUONG MANUFACTURING FACTORY INTRODUCTION
                            </a>
                          </div>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-40'
                              data-title='Walmart - Vanity'
                              data-description
                              data-keyword
                            >
                              Walmart - Vanity
                            </a>
                          </div>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-46'
                              data-title='BATHROOM VANITY / LAUNDRY CABINET'
                              data-description
                              data-keyword
                            >
                              BATHROOM VANITY / LAUNDRY CABINET
                            </a>
                          </div>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-47'
                              data-title='KITCHEN CABINETS'
                              data-description
                              data-keyword
                            >
                              KITCHEN CABINETS
                            </a>
                          </div>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-48'
                              data-title='BEDROOM FURNITURE'
                              data-description
                              data-keyword
                            >
                              BEDROOM FURNITURE
                            </a>
                          </div>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-49'
                              data-title='OFFICE FURNITURE & FURNITURE FOR SCHOOL'
                              data-description
                              data-keyword
                            >
                              OFFICE FURNITURE &amp;FURNITURE FOR SCHOOL
                            </a>
                          </div>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-50'
                              data-title='FURNITURE FOR HOSPITALITY PROJECTS'
                              data-description
                              data-keyword
                            >
                              FURNITURE FOR HOSPITALITY PROJECTS
                            </a>
                          </div>
                          <div className='second-sub '>
                            <a
                              className='link-load sub-btn'
                              href='/'
                              data-name='product-51'
                              data-title='SHIPBUILDING MATERIALS'
                              data-description
                              data-keyword='ancuong, an cuong wood, imo, laminate, ship, english, export, product, acg'
                            >
                              SHIPBUILDING MATERIALS
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='item-sub '>
                        <a
                          className='link-load sub-btn'
                          href='/'
                          data-sub
                          data-name='product-439'
                          data-title='Tin tức xuất khẩu'
                          data-description
                          data-keyword
                        >
                          Tin tức xuất khẩu
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a className='link-load btn special-nav' href='/' data-title='Showroom' data-description data-keyword>
                  Showroom
                </a>
              </li>
              <li>
                <a
                  className='link-load btn'
                  href='/'
                  data-name='youtube-page'
                  data-title='Youtube'
                  data-description
                  data-keyword
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  className='link-load btn'
                  href='/'
                  data-name='news-page'
                  data-title='An Cuong wood working materials'
                  data-description='An Cuong wood working materials'
                  data-keyword='An Cuong wood working materials'
                >
                  Tin tức
                </a>
              </li>
              <li>
                <a
                  className='link-load btn'
                  href='/'
                  data-name='investment-page'
                  data-title='Quan hệ nhà đầu tư'
                  data-description
                  data-keyword='an cường, gỗ an cường, acg, cổ phiếu, chứng khoán, nhà đầu tư, cổ động'
                >
                  Quan hệ nhà đầu tư
                </a>
              </li>
            </ul>
            <ul className='menu-second'>
              <li>
                <div
                  className='has-sub btn special-nav'
                  data-name='award-page'
                  data-open='four'
                  data-title='IDA'
                  data-description
                  data-keyword
                  aria-label='sub'
                >
                  IDA
                </div>
                <div className='sub-menu' data-menu='four'>
                  <div className='item-sub '>
                    <a
                      className='link-blank second-btn'
                      href='/'
                      data-name='award-page'
                      data-title='Năm 2023'
                      data-description
                      data-keyword
                    >
                      Năm 2023
                    </a>
                  </div>
                  <div className='item-sub '>
                    <a
                      className='link-load second-btn'
                      href='/'
                      data-name='award-page'
                      data-title='INTERIOR DESIGN AWARD 2022'
                      data-description='Giải thưởng IDA được xem là giải thưởng thường niên của Công Ty Cổ Phần Gỗ An Cường ở nhiều lĩnh vực khác nhau như kiến trúc, nội thất, sáng tạo họa tiết trên vật liệu mới..., nhằm mục đích kết nối, phát triển và vinh danh những Kiến trúc sư, Nhà thiết kế'
                      data-keyword='an cường, gỗ an cường, interior design, award, event, sự kiện, sinh viên, kiến trúc, đại học, shophouse'
                    >
                      Năm 2022
                    </a>
                  </div>
                  <div className='item-sub '>
                    <a
                      className='link-load second-btn'
                      href='/'
                      data-name='award-page'
                      data-title='INTERIOR DESIGN AWARD 2021'
                      data-description='Với sự đầu tư công phu và kỹ lưỡng, cuộc thi An Cường Interior Design Award 2021 sẽ chính thức nhận hồ sơ dự thi từ 01/07/2021 – 20/08/2021 cùng chủ đề chính “Story-telling through your space – Kể câu chuyện của bạn qua không gian Nội Thất”, hứa hẹn là mộ'
                      data-keyword='an cường, gỗ an cường, interior design, award, event, sự kiện, sinh viên, kiến trúc, đại học'
                    >
                      Năm 2021
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className='has-sub btn'
                  data-name='catalogue-page'
                  data-open='three'
                  data-title='AN CƯỜNG ONLINE CATALOGUE'
                  data-description='An Cuong wood working materials'
                  data-keyword='an cường, gỗ an cường, an cuong, catalogue, mfc, melamine, laminate, laminate kingdo, acrylic, veneer'
                  aria-label='sub'
                >
                  Download
                </div>
                <div className='sub-menu' data-menu='three'>
                  <div className='item-sub '>
                    <a
                      className='link-load second-btn'
                      href='/'
                      data-name='catalogue-page'
                      data-title='Online Catalogue'
                      data-description
                      data-keyword='an cường, gỗ an cường, catalogue, mfc, laminate, laminate kingdom, acrylic'
                    >
                      Catalogue
                    </a>
                  </div>
                  <div className='item-sub '>
                    <a
                      className='link-load second-btn'
                      href='/'
                      data-name='mapcolor-page'
                      data-title='An Cuong wood working materials'
                      data-description='An Cuong wood working materials'
                      data-keyword='An Cuong wood working materials'
                    >
                      Map màu
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className='has-sub btn'
                  data-name='contact-page'
                  data-open='two'
                  data-title='Liên hệ'
                  data-description='An Cuong wood working materials'
                  data-keyword='An Cuong wood working materials'
                  aria-label='sub'
                >
                  Liên hệ
                </div>
                <div className='sub-menu' data-menu='two'>
                  <div className='item-sub '>
                    <a className='second-btn link-blank' href='/'>
                      Tư vấn trực tuyến
                    </a>
                  </div>
                  <div className='item-sub '>
                    <a
                      className='link-load second-btn'
                      href='/'
                      data-name='contact-page'
                      data-title='Hệ thống bán hàng'
                      data-description
                      data-keyword
                    >
                      Hệ thống bán hàng
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='nav-click'>
        <div className='line' />
      </div>
      <span className='color-head' />
    </header>
  )
}

export default Header

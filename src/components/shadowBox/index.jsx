import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'

const ShadowStyled = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1000;
  background: linear-gradient(180deg, #00000099 0, #0000004d 100%);
  overflow: hidden;
  -ms-touch-action: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: -moz-none;
  -ms-user-select: none;
  transition: height 0.8s ease-in-out;
  z-index: 1500;
`

const CloseBtn = styled.button`
  display: block;
  width: 60px;
  height: 60px;
  cursor: pointer;
  position: fixed;
  border-radius: 50%;
  z-index: 999999;
  right: 10px;
  top: 10px;
  background: #0000001a url(../images/close.svg) no-repeat 50%/80%;
`
const ShadowBox = ({ show, children }) => {
  return (
    <ShadowStyled>
      <CloseBtn />
    </ShadowStyled>
  )
}

export default ShadowBox

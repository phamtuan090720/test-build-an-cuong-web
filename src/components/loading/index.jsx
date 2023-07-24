import classNames from 'classnames'
import React from 'react'
import { styled } from 'styled-components'
const LoadingStyled = styled.img``
const Loading = ({ className }) => {
  return <LoadingStyled src='/images/cycle.png' className={classNames([className, 'loading'])} />
}

export default Loading

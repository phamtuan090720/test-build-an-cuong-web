import React, { useState } from 'react'
import { styled } from 'styled-components'
const ContainerTab = styled.div`
  width: 100%;
  height: auto;
  overflow-y: hidden;
  overflow-x: auto;

  ul {
    width: 100%;
    white-space: nowrap;
    z-index: 2;
  }

  .tab-item {
    vertical-align: top;
    box-shadow: 0 20px 30px #0000001a;
    width: auto;
    display: inline-block;
    margin: 0 -1px;
    z-index: 2;
    span {
      display: block;
      padding: 15px;
      text-transform: uppercase;
      vertical-align: top;
      margin: 0 2px;
      font-weight: 700;
      font-size: 14px;
      color: #7e8387;
      background-color: white;
      &:hover {
        cursor: pointer;
      }
    }

    &.acctive span {
      color: white;
      background-color: #ff7c46;
      pointer-events: none;
    }
  }
`

const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (index) => {
    setActiveTab(index)
  }

  return (
    <ContainerTab>
      <ul>
        {tabs?.map((tab, index) => (
          <li
            key={index}
            className={`tab-item ${activeTab === index ? 'acctive' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            <span>{tab?.label}</span>
          </li>
        ))}
      </ul>
      <div>{tabs[activeTab].content}</div>
    </ContainerTab>
  )
}

export default Tab

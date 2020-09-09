import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { headerLinks } from '@/api/local-data'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { 
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style'

export default memo(function AppHeader() {
  const showItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a className="logo sprite_01" href="#/">网易云音乐</a>
          <ul className="select-list">
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className="select-item">
                    { showItem(item, index) }
                  </div>
                )
              })
            }
          </ul>
        </HeaderLeft>
        <HeaderRight>
          <Input prefix={<SearchOutlined />} placeholder="音乐/视频/电台/用户" className="search" />
          <div className="center">创作者中心</div>
          <div className="">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})

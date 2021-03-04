import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { dicoverMenu } from '@/api/local-data'
import { DiscoveryWrapper, TopMenu } from './style'

export default memo(function Discovery(props) {
  const { route } = props

  return (
    <DiscoveryWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {
            dicoverMenu.map(item => {
              return (
                <div key={item.title} className="item">
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
      { renderRoutes(route.routes) }
    </DiscoveryWrapper>
  )
})

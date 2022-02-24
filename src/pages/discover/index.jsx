import React, { memo } from 'react'
import { discoverMenus } from '@/common/local-data'
import { DiscoverWrapper, TopMenu } from './style'
import { NavLink, Outlet } from 'react-router-dom'
export default memo(function LYFDiscover() {
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {discoverMenus.map((item, index) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            )
          })}
        </TopMenu>
      </div>
      <Outlet />
    </DiscoverWrapper>
  )
})

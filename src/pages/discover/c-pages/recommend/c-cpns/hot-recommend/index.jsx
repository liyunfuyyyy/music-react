import React, { memo } from 'react'

import LYFThemeHeaderRCM from 'components/theme-header-rcm'
import { HotRecommendWrapper } from './style'

export default memo(function LYFHotRecommend() {
  return (
    <HotRecommendWrapper>
      <LYFThemeHeaderRCM
        title="热门推荐"
        keywords={['华语', '流行', '民谣', '摇滚', '电子']}
      />
      <div className="recommend-list"></div>
    </HotRecommendWrapper>
  )
})

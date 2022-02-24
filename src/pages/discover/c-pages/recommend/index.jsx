import React, { memo } from 'react'

import LYFTopBanner from './c-cpns/top-banner'
import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style'
const LYFRecommend = memo(function LYFRecommend() {
  return (
    <RecommendWrapper>
      <LYFTopBanner />
      <Content className="wrap-v2">
        <RecommendLeft></RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  )
})

export default LYFRecommend

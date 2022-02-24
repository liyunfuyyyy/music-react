import React, { memo } from 'react'

import LYFTopBanner from './c-cpns/top-banner'
import LYFHotRecommend from './c-cpns/hot-recommend'
import LYFNewAlbum from './c-cpns/new-album'
import LYFRecommendRanking from './c-cpns/recommend-ranking'
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
        <RecommendLeft>
          <LYFHotRecommend />
          <LYFNewAlbum />
          <LYFRecommendRanking />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  )
})

export default LYFRecommend

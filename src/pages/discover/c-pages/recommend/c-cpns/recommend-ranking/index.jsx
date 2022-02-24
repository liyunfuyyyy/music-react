import React, { memo } from 'react'

import LYFThemeHeaderRCM from 'components/theme-header-rcm'
import { RankingWrapper } from './style'

export default memo(function LYFRecommendRanking() {
  return (
    <RankingWrapper>
      <LYFThemeHeaderRCM title="榜单" />
    </RankingWrapper>
  )
})

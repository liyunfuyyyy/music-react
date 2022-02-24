import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTopListAction } from '../../store/actionCreators'

import LYFThemeHeaderRCM from 'components/theme-header-rcm'
import LYFTopRanking from '@/components/top-ranking'
import { RankingWrapper } from './style'

export default memo(function LYFRecommendRanking() {
  const { upRanking, newRanking, originRanking } = useSelector((state) => ({
    upRanking: state.getIn(['recommend', 'upRanking']),
    newRanking: state.getIn(['recommend', 'newRanking']),
    originRanking: state.getIn(['recommend', 'originRanking'])
  }))

  // other hooks

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopListAction(19723756))
    dispatch(getTopListAction(3779629))
    dispatch(getTopListAction(2884035))
  }, [dispatch])
  return (
    <RankingWrapper>
      <LYFThemeHeaderRCM title="榜单" />
      <div className="tops">
        <LYFTopRanking info={upRanking} />
        <LYFTopRanking info={newRanking} />
        <LYFTopRanking info={originRanking} />
      </div>
    </RankingWrapper>
  )
})

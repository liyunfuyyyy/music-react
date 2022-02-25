import React, { memo } from 'react'

import { PlayerWrapper, PlayerLeft, PlayerRight } from './style'

export default memo(function LYFPlayer() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <h2>PlayerInfo</h2>
          <h2>SongsContent</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>SemiPlayList</h2>
          <h2>SemiSong</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})

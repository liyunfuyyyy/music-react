import React, { memo } from 'react'

import LYFThemeHeaderRCM from 'components/theme-header-rcm'
import { AlbumWrapper } from './style'
export default memo(function LYFNewAlbum() {
  return (
    <AlbumWrapper>
      <LYFThemeHeaderRCM title="新碟上架" />
    </AlbumWrapper>
  )
})

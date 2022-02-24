import React, { memo } from 'react'

import { getSizeImage } from '@/utils/format-utils'
import { AlbumWrapper } from './style'
export default memo(function LYFAlbumCover(props) {
  // state and props
  const { info, size = 130, width = 153, bgp = '-845px' } = props
  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl)} alt="" />
        <a href="/todo" className="cover image_cover">
          {info.name}
        </a>
      </div>
      <div className="album-info">
        <div className="name">{info.name}</div>
        <div className="artist">{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  )
})

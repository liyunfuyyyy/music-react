import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'

import { Carousel } from 'antd'
import LYFAlbumCover from '@/components/album-cover'
import LYFThemeHeaderRCM from '@/components/theme-header-rcm'
import { NEW_ALBUM_LIMIT } from '@/common/constants'
import { getNewAlbumAction } from '../../store/actionCreators'
import { AlbumWrapper } from './style'
export default memo(function LYFNewAlbum() {
  const { newAlbums } = useSelector(
    (state) => ({
      newAlbums: state.getIn(['recommend', 'newAlbums'])
    }),
    shallowEqual
  )

  const dispatch = useDispatch()
  //other hoooks
  const pageRef = useRef()
  useEffect(() => {
    dispatch(getNewAlbumAction(NEW_ALBUM_LIMIT))
  }, [dispatch])

  return (
    <AlbumWrapper>
      <LYFThemeHeaderRCM title="新碟上架" />
      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={(e) => pageRef.current.prev()}
        ></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="page">
                  {newAlbums.slice(item * 5, (item + 1) * 5).map((iten) => {
                    return (
                      <LYFAlbumCover
                        key={iten.id}
                        info={iten}
                        size={118}
                        width={118}
                        bgp="-570px"
                      >
                        {iten.name}
                      </LYFAlbumCover>
                    )
                  })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <button
          className="arrow arrow-right sprite_02"
          onClick={(e) => pageRef.current.next()}
        ></button>
      </div>
    </AlbumWrapper>
  )
})

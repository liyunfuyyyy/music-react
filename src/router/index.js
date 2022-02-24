import * as React from 'react'
import { Navigate } from 'react-router-dom'

const Discover = React.lazy(() => import('@/pages/discover'))
const Friend = React.lazy(() => import('@/pages/friend'))
const Mine = React.lazy(() => import('@/pages/mine'))

const LYFRecommend = React.lazy(() => import('@/pages/discover/c-pages/recommend'))
const LYFRanking = React.lazy(() => import('@/pages/discover/c-pages/ranking'))
const LYFSongs = React.lazy(() => import('@/pages/discover/c-pages/songs'))
const LYFDjradio = React.lazy(() => import('@/pages/discover/c-pages/djradio'))
const LYFArtist = React.lazy(() => import('@/pages/discover/c-pages/artist'))
const LYFAlbum = React.lazy(() => import('@/pages/discover/c-pages/album'))
const routes = [
  {
    path: '/',
    element: <Navigate to='/discover' />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        index: true,
        element: <LYFRecommend />
      },
      {
        path: 'recommend',
        element: <LYFRecommend />
      },
      {
        path: 'ranking',
        element: <LYFRanking />
      },
      {
        path: 'songs',
        element: <LYFSongs />
      },
      {
        path: 'djradio',
        element: <LYFDjradio />
      },
      {
        path: 'artist',
        element: <LYFArtist />
      },
      {
        path: 'album',
        element: <LYFAlbum />
      }
    ]
  },

  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/friend',
    element: <Friend />
  }


]

export default routes
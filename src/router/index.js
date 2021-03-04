import React from 'react'
import { Redirect } from 'react-router-dom'
import Discovery from '@/pages/discovery'
import Recommend from '@/pages/discovery/c-pages/recommend'
import Ranking from '@/pages/discovery/c-pages/ranking'
import Songs from '@/pages/discovery/c-pages/songs'
import Djradio from '@/pages/discovery/c-pages/djradio'
import Artist from '@/pages/discovery/c-pages/artist'
import Album from '@/pages/discovery/c-pages/album'
import Mine from '@/pages/mine'
import Friends from '@/pages/friends'

const routes = [
  {
    path: '/',
    exact: true,
    render: () => (
      <Redirect to="/discovery" />
    )
  },
  {
    path: '/discovery',
    component: Discovery,
    routes: [
      {
        path: '/discovery',
        exact: true,
        render: () => (
          <Redirect to={'/discovery/artist'} />
        )
      },
      {
        path: '/discovery/recommend',
        component: Recommend
      },
      {
        path: '/discovery/ranking',
        component: Ranking
      },
      {
        path: '/discovery/songs',
        component: Songs
      },
      {
        path: '/discovery/djradio',
        component: Djradio
      },
      {
        path: '/discovery/artist',
        component: Artist
      },
      {
        path: '/discovery/album',
        component: Album
      }
    ]
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/friends',
    component: Friends
  }
]

export default routes

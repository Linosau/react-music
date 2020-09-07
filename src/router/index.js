import Discovery from '@/pages/discovery'
import Mine from '@/pages/mine'
import Friends from '@/pages/friends'

const routes = [
  {
    path: '/',
    exact: true,
    component: Discovery
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

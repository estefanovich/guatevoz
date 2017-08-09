import CoreLayout from '../layouts/PageLayout/PageLayout'
import Home from './Home'
import Map from './Map'

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    {
      path: '/map',
      component: CoreLayout,
      indexRoute: Map,
      childRoutes: []
    }
  ]
})

export default createRoutes